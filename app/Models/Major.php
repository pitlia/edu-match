<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Major extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'description',
        'quota',
        'enrolled_count',
        'facilities',
        'career_prospects',
        'badge_color',
        'icon',
    ];

    protected $casts = [
        'facilities' => 'array',
        'career_prospects' => 'array',
        'quota' => 'integer',
        'enrolled_count' => 'integer',
    ];

    public function criteriaWeights(): HasMany
    {
        return $this->hasMany(MajorCriteriaWeight::class)->orderBy('rank_order');
    }

    public function registrationsAsFirstChoice(): HasMany
    {
        return $this->hasMany(Registration::class, 'first_choice_major_id');
    }

    public function getRemainingQuotaAttribute(): int
    {
        return max(0, $this->quota - $this->enrolled_count);
    }

    public function getIsFullAttribute(): bool
    {
        return $this->enrolled_count >= $this->quota;
    }
}
