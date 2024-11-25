<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Areas extends Model
{
    use HasFactory;
    protected $guarded=[];
    public function district(){
        return $this->belongsTo(Districts::class);
    }

    public function userWiseArea(){
        return $this->hasMany(userArea::class,'area_id');
    }
}
