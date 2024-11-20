<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Designations extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function zone()
    {
        return $this->belongsTo(Zone::class);
    }
    public function employHierarchy()
    {
        return $this->belongsTo(EmployHierarchy::class,'level','id');
    }
    
}
