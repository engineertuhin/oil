<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Districts extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function zone(){
        return $this->belongsTo(Zone::class);
    }
    public function area(){
        return $this->hasMany(Areas::class,'district_id');
    }
    public function userWiseDistrict(){
        return $this->hasMany(userDistrict::class,'district_id');
    }
}
