<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userArea extends Model
{
    use HasFactory;
    public function user(){
        return $this->hasMany(User::class,'id','user_id');
    }

}
