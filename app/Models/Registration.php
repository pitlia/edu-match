<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Registration extends Model
{
    use HasFactory;

    protected $fillable = [
        'registration_number',
        'assessment_id',
        'full_name',
        'nisn',
        'email',
        'phone',
        'origin_school',
        'first_choice_major_id',
        'second_choice_major_id',
        'status',
        'documents',
        'notes',
    ];

    protected $casts = [
        'documents' => 'array',
    ];

    public function assessment(): BelongsTo
    {
        return $this->belongsTo(Assessment::class);
    }

    public function firstChoiceMajor(): BelongsTo
    {
        return $this->belongsTo(Major::class, 'first_choice_major_id');
    }

    public function secondChoiceMajor(): BelongsTo
    {
        return $this->belongsTo(Major::class, 'second_choice_major_id');
    }
}
