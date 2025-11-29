<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = [
        'name',
        'image',
        'job_title',
        'linkedin_url',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    // Accessor for image URL
    public function getImageUrlAttribute()
    {
        if ($this->image) {
            return asset('uploads/members/' . $this->image);
        }
        return null;
    }
}