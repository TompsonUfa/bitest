<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'title',
        'image',
        'author_id ',
        'time_complete',
        'attempts',
        'limit_questions',
        'published',
        'created_at',
        'updated_at',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }
}
