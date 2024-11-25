<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function designation()
    {
        return $this->hasOne(Designations::class, 'user_id', 'id')->with('employHierarchy');
    }


    public function areas()
    {
        return $this->belongsToMany(Areas::class, 'user_areas', 'user_id', 'area_id');
    }
    public function zone()
    {
        return $this->belongsToMany(Zone::class, 'user_zones', 'user_id', 'zone_id');
    }
    public function district()
    {
        return $this->belongsToMany(Districts::class, 'user_districts', 'user_id', 'district_id');
    }
}
