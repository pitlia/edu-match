<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Assessment extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'student_name',
        'student_nisn',
        'phone',
        'academic_scores',
        'riasec_answers',
        'criteria_values',
        'results',
        'recommended_major_id',
        'alternative_major_id',
    ];

    protected $casts = [
        'academic_scores' => 'array',
        'riasec_answers' => 'array',
        'criteria_values' => 'array',
        'results' => 'array',
    ];

    public function recommendedMajor(): BelongsTo
    {
        return $this->belongsTo(Major::class, 'recommended_major_id');
    }

    public function alternativeMajor(): BelongsTo
    {
        return $this->belongsTo(Major::class, 'alternative_major_id');
    }

    public function registration(): HasOne
    {
        return $this->hasOne(Registration::class);
    }
}
