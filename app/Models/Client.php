<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function clientHierarchiesAttach()
    {
        return $this->belongsToMany(ClientHierarchies::class, 'client_hierarchies_attaches', 'client_id', 'client_hierarchies_id');
    }
}
