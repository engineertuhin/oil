<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Zone extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function districts()
    {
        return $this->hasMany(Districts::class);
    }
    public function zoneWiseUser()
    {
        return $this->hasMany(userZone::class);
    }
}
