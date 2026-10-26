<?php

namespace Database\Seeders;

use App\Models\Criterion;
use App\Models\Major;
use App\Models\MajorCriteriaWeight;
use App\Services\SmarterSpkService;
use Illuminate\Database\Seeder;

class EduMatchSeeder extends Seeder
{
    public function run(): void
    {
        $spkService = new SmarterSpkService();

        // 1. Majors
        $majorsData = [
            [
                'code' => 'RPL',
                'name' => 'Rekayasa Perangkat Lunak',
                'description' => 'Fokus pada pengembangan aplikasi web, mobile, sistem komputasi awan, dan rekayasa kecerdasan buatan terapan.',
                'quota' => 72,
                'enrolled_count' => 48,
                'badge_color' => 'indigo',
                'icon' => 'Code2',
                'facilities' => [
                    'Laboratorium iMac & PC High-End',
                    'Akses Cloud Server & High-Speed Internet',
                    'Dev Studio & Co-Working Space',
                    'Perangkat VR/AR Development Kit',
                ],
                'career_prospects' => [
                    'Fullstack Web Developer',
                    'Mobile Application Developer (Flutter/React Native)',
                    'Software Quality Assurance (QA)',
                    'Database Administrator & DevOps Junior',
                ],
            ],
            [
                'code' => 'DKV',
                'name' => 'Desain Komunikasi Visual (Multimedia)',
                'description' => 'Mempelajari perancangan identitas visual, ilustrasi digital, videografi, motion graphics, dan UI/UX interaktif.',
                'quota' => 72,
                'enrolled_count' => 65,
                'badge_color' => 'purple',
                'icon' => 'Palette',
                'facilities' => [
                    'Studio Fotografi & Green Screen',
                    'Drawing Tablet Wacom & Display Display Pen',
                    'Laboratorium Rendering Video & 3D Animation',
                    'Audio Recording & Dubbing Booth',
                ],
                'career_prospects' => [
                    'UI/UX Designer & Product Designer',
                    'Motion Designer & Video Editor',
                    '2D/3D Digital Illustrator',
                    'Creative Director & Content Creator',
                ],
            ],
            [
                'code' => 'TB',
                'name' => 'Tata Busana (Fashion Design)',
                'description' => 'Menghasilkan perancang busana profesional, penguasaan pola digital, teknik draping, tekstil, dan industri busana siap pakai.',
                'quota' => 36,
                'enrolled_count' => 20,
                'badge_color' => 'rose',
                'icon' => 'Scissors',
                'facilities' => [
                    'Workshop Jahit Industri & Mesin Digital',
                    'Studio Pola & Manekin Standar Internasional',
                    'Ruang Catwalk & Pameran Busana',
                    'Laboratorium Sablon & Pewarnaan Tekstil',
                ],
                'career_prospects' => [
                    'Fashion Designer & Stylist',
                    'Pattern Maker & Production Supervisor',
                    'Wirausaha Butik & Clothing Line',
                    'Costume Designer Perfilman',
                ],
            ],
            [
                'code' => 'ATPH',
                'name' => 'Agribisnis Tanaman Perkebunan & Hortikultura',
                'description' => 'Teknologi pertanian modern, smart farming berbasis IoT, budidaya hidroponik, bioteknologi tanaman, dan agribisnis komoditas bernilai tinggi.',
                'quota' => 36,
                'enrolled_count' => 14,
                'badge_color' => 'emerald',
                'icon' => 'Leaf',
                'facilities' => [
                    'Smart Greenhouse IoT & Sensor Iklim Otomatis',
                    'Lahan Praktik Perkebunan & Tanaman Buah',
                    'Laboratorium Kultur Jaringan & Bioteknologi',
                    'Pusat Pasca Panen & Kemasan Produk Agribisnis',
                ],
                'career_prospects' => [
                    'Smart Farming & Precision Agriculture Specialist',
                    'Manajer Kebun & Nursery Supervisor',
                    'Agronomist & Konsultan Hortikultura',
                    'Wirausaha Agribisnis Komoditas Ekspor',
                ],
            ],
        ];

        $majorModels = [];
        foreach ($majorsData as $mData) {
            $majorModels[$mData['code']] = Major::updateOrCreate(['code' => $mData['code']], $mData);
        }

        // 2. Criteria
        $criteriaData = [
            // Akademik
            ['code' => 'MAT', 'name' => 'Matematika', 'category' => 'academic', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Logika angka, pemecahan masalah algoritmis, dan analitis formal'],
            ['code' => 'IPA', 'name' => 'Ilmu Pengetahuan Alam', 'category' => 'academic', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Konsep sains, biologi terapan, sifat material, dan logika ilmiah'],
            ['code' => 'BIND', 'name' => 'Bahasa Indonesia', 'category' => 'academic', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Kemampuan literasi, narasi, penulisan deskripsi, dan tata bahasa'],
            ['code' => 'BING', 'name' => 'Bahasa Inggris', 'category' => 'academic', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Komunikasi global, dokumentasi teknis, dan istilah spesifik industri'],
            
            // RIASEC Psychometric
            ['code' => 'RIASEC_R', 'name' => 'Minat Realistis (Praktek/Fisik)', 'category' => 'psychometric', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Aktivitas fisik nyata, mesin, tumbuhan, dan alat kerja langsung'],
            ['code' => 'RIASEC_I', 'name' => 'Minat Investigatif (Logika/Analisis)', 'category' => 'psychometric', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Pemecahan teka-teki logika, riset mandiri, eksperimen, dan coding'],
            ['code' => 'RIASEC_A', 'name' => 'Minat Artistik (Kreativitas/Visual)', 'category' => 'psychometric', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Imajinasi, estetika visual, rancang pola warna, dan kreasi orisinal'],
            ['code' => 'RIASEC_S', 'name' => 'Minat Sosial (Komunikasi/Relasi)', 'category' => 'psychometric', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Kolaborasi tim, empati, membantu orang lain, dan kepedulian lingkungan'],
            ['code' => 'RIASEC_E', 'name' => 'Minat Enterprising (Wirausaha/Persuasi)', 'category' => 'psychometric', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Inisiatif bisnis, kepemimpinan tim, negosiasi, dan penjualan produk'],
            ['code' => 'RIASEC_C', 'name' => 'Minat Konvensional (Ketelitian/Sistematis)', 'category' => 'psychometric', 'type' => 'benefit', 'min_val' => 0, 'max_val' => 100, 'description' => 'Kerapian, ketelitian detail ukuran, kepatuhan prosedur, dan dokumentasi rapi'],
        ];

        $criteriaModels = [];
        foreach ($criteriaData as $cData) {
            $criteriaModels[$cData['code']] = Criterion::updateOrCreate(['code' => $cData['code']], $cData);
        }

        // 3. Multi-profil Prioritas Urutan Kriteria per Jurusan
        $k = count($criteriaData); // 10 kriteria
        $rocWeights = $spkService->calculateRocWeights($k);

        $priorities = [
            'RPL' => [
                'MAT',        // 1. Matematika (Logika)
                'RIASEC_I',   // 2. Investigatif (Problem Solving)
                'RIASEC_C',   // 3. Konvensional (Ketelitian sintaks)
                'BING',       // 4. Bahasa Inggris (Dokumentasi coding)
                'IPA',        // 5. IPA
                'RIASEC_A',   // 6. Artistik (UI/UX dasar)
                'BIND',       // 7. Bahasa Indonesia
                'RIASEC_E',   // 8. Enterprising
                'RIASEC_S',   // 9. Sosial
                'RIASEC_R',   // 10. Realistis
            ],
            'DKV' => [
                'RIASEC_A',   // 1. Artistik (Estetika & visual)
                'RIASEC_I',   // 2. Investigatif (Riset tren desain)
                'BIND',       // 3. Bahasa Indonesia (Copywriting visual)
                'BING',       // 4. Bahasa Inggris
                'RIASEC_C',   // 5. Konvensional (Piksel & presisi layout)
                'RIASEC_E',   // 6. Enterprising (Pitching ide kreatif)
                'MAT',        // 7. Matematika
                'RIASEC_S',   // 8. Sosial
                'RIASEC_R',   // 9. Realistis
                'IPA',        // 10. IPA
            ],
            'TB' => [
                'RIASEC_A',   // 1. Artistik (Desain mode & kombinasi warna)
                'RIASEC_C',   // 2. Konvensional (Ketelitian ukuran pola & jahit)
                'RIASEC_E',   // 3. Enterprising (Wirausaha butik & branding)
                'RIASEC_R',   // 4. Realistis (Pengoperasian mesin jahit & tekstil)
                'BIND',       // 5. Bahasa Indonesia
                'RIASEC_S',   // 6. Sosial
                'BING',       // 7. Bahasa Inggris
                'MAT',        // 8. Matematika
                'RIASEC_I',   // 9. Investigatif
                'IPA',        // 10. IPA
            ],
            'ATPH' => [
                'RIASEC_R',   // 1. Realistis (Praktik fisik, perkebunan, alat)
                'IPA',        // 2. IPA (Biologi tumbuhan, hara, iklim)
                'RIASEC_I',   // 3. Investigatif (Analisis hama & nutrisi hidroponik)
                'RIASEC_C',   // 4. Konvensional (Disiplin jadwal tanam & panen)
                'RIASEC_E',   // 5. Enterprising (Bisnis & pemasaran hasil tani)
                'MAT',        // 6. Matematika
                'BIND',       // 7. Bahasa Indonesia
                'RIASEC_S',   // 8. Sosial
                'BING',       // 9. Bahasa Inggris
                'RIASEC_A',   // 10. Artistik
            ],
        ];

        foreach ($priorities as $mCode => $critCodes) {
            $major = $majorModels[$mCode];
            foreach ($critCodes as $rankIndex => $critCode) {
                $rankOrder = $rankIndex + 1;
                $weight = $rocWeights[$rankOrder] ?? 0.0;
                $criterion = $criteriaModels[$critCode];

                MajorCriteriaWeight::updateOrCreate(
                    [
                        'major_id' => $major->id,
                        'criteria_id' => $criterion->id,
                    ],
                    [
                        'rank_order' => $rankOrder,
                        'roc_weight' => $weight,
                    ]
                );
            }
        }
    }
}
