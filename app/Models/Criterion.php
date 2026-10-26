<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Criterion extends Model
{
    use HasFactory;

    protected $table = 'criteria';

    protected $fillable = [
        'code',
        'name',
        'category',
        'type',
        'min_val',
        'max_val',
        'description',
    ];

    protected $casts = [
        'min_val' => 'float',
        'max_val' => 'float',
    ];

    public function majorWeights(): HasMany
    {
        return $this->hasMany(MajorCriteriaWeight::class, 'criteria_id');
    }
}
