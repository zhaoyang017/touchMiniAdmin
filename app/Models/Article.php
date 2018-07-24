<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $guarded = ['id'];

    public function Category()
    {
        $this->belongsTo('App\Models\Category');
    }
}