<?php

namespace App\Services;

use App\Models\Criterion;
use App\Models\Major;

class SmarterSpkService
{
    /**
     * Hitung bobot Rank Order Centroid (ROC) untuk K kriteria.
     * Formula: w_r = (1 / K) * sum_{i=r}^{K} (1 / i)
     *
     * @param int $k Jumlah kriteria
     * @return array [1 => w1, 2 => w2, ..., K => wK]
     */
    public function calculateRocWeights(int $k): array
    {
        if ($k <= 0) {
            return [];
        }

        $weights = [];
        for ($r = 1; $r <= $k; $r++) {
            $sum = 0.0;
            for ($i = $r; $i <= $k; $i++) {
                $sum += (1.0 / $i);
            }
            $weights[$r] = round($sum / $k, 4);
        }

        return $weights;
    }

    /**
     * Normalisasi nilai ke fungsi utilitas SMART [0, 1].
     */
    public function normalizeUtility(float $value, float $min = 0, float $max = 100, string $type = 'benefit'): float
    {
        if ($max <= $min) {
            return 1.0;
        }

        $clamped = max($min, min($max, $value));

        if ($type === 'cost') {
            return ($max - $clamped) / ($max - $min);
        }

        return ($clamped - $min) / ($max - $min);
    }

    /**
     * Evaluasi calon siswa menggunakan Multi-Profil SMARTER untuk seluruh jurusan.
     *
     * @param array $criteriaValues Map kriteria code => float nilai (misal: ['MAT' => 85, 'RIASEC_I' => 90, ...])
     * @return array Hasil evaluasi, peringkat jurusan, detail kalkulasi utilitas, dan rekomendasi
     */
    public function evaluate(array $criteriaValues): array
    {
        $majors = Major::with(['criteriaWeights.criterion'])->get();
        $results = [];

        foreach ($majors as $major) {
            $totalScore = 0.0;
            $criteriaBreakdown = [];

            foreach ($major->criteriaWeights as $cw) {
                $criterion = $cw->criterion;
                if (!$criterion) {
                    continue;
                }

                $code = $criterion->code;
                $rawVal = isset($criteriaValues[$code]) ? (float)$criteriaValues[$code] : 0.0;
                $utility = $this->normalizeUtility(
                    $rawVal,
                    $criterion->min_val,
                    $criterion->max_val,
                    $criterion->type
                );

                $weight = (float)$cw->roc_weight;
                $contribution = $weight * $utility;
                $totalScore += $contribution;

                $criteriaBreakdown[] = [
                    'code' => $code,
                    'name' => $criterion->name,
                    'rank' => $cw->rank_order,
                    'weight' => $weight,
                    'raw_value' => $rawVal,
                    'utility' => round($utility, 4),
                    'weighted_score' => round($contribution * 100, 2),
                ];
            }

            $percentage = round($totalScore * 100, 2);

            $results[] = [
                'major_id' => $major->id,
                'code' => $major->code,
                'name' => $major->name,
                'badge_color' => $major->badge_color,
                'icon' => $major->icon,
                'quota' => $major->quota,
                'enrolled_count' => $major->enrolled_count,
                'remaining_quota' => $major->remaining_quota,
                'is_full' => $major->is_full,
                'percentage' => $percentage,
                'criteria_breakdown' => $criteriaBreakdown,
            ];
        }

        // Urutkan berdasarkan persentase tertinggi
        usort($results, fn($a, $b) => $b['percentage'] <=> $a['percentage']);

        // Tambahkan peringkat
        foreach ($results as $index => &$res) {
            $res['rank'] = $index + 1;
        }
        unset($res);

        $primaryChoice = $results[0] ?? null;
        $alternativeChoice = null;

        // Jika pilihan utama penuh, cari jurusan alternatif pertama yang masih memiliki sisa kuota
        if ($primaryChoice && $primaryChoice['is_full']) {
            foreach (array_slice($results, 1) as $candidate) {
                if (!$candidate['is_full']) {
                    $alternativeChoice = $candidate;
                    break;
                }
            }
        } else {
            $alternativeChoice = $results[1] ?? null;
        }

        return [
            'ranking' => $results,
            'primary_recommendation' => $primaryChoice,
            'alternative_recommendation' => $alternativeChoice,
            'capacity_warning' => $primaryChoice ? $primaryChoice['is_full'] : false,
        ];
    }

    /**
     * Hitung Koefisien Korelasi Spearman (rs) untuk uji stabilitas & sensitivitas.
     * rs = 1 - (6 * sum(d_i^2)) / (n * (n^2 - 1))
     */
    public function calculateSpearman(array $ranksA, array $ranksB): float
    {
        $n = count($ranksA);
        if ($n < 2 || $n !== count($ranksB)) {
            return 1.0;
        }

        $sumD2 = 0;
        foreach ($ranksA as $key => $rA) {
            $rB = $ranksB[$key] ?? $rA;
            $diff = $rA - $rB;
            $sumD2 += ($diff * $diff);
        }

        $denominator = $n * (($n * $n) - 1);
        if ($denominator === 0) {
            return 1.0;
        }

        return round(1 - ((6 * $sumD2) / $denominator), 4);
    }
}
