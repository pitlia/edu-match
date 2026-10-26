<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MajorCriteriaWeight extends Model
{
    use HasFactory;

    protected $fillable = [
        'major_id',
        'criteria_id',
        'rank_order',
        'roc_weight',
    ];

    protected $casts = [
        'rank_order' => 'integer',
        'roc_weight' => 'float',
    ];

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function criterion(): BelongsTo
    {
        return $this->belongsTo(Criterion::class, 'criteria_id');
    }
}
