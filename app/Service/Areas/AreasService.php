<?php

namespace App\Service\Areas;

use App\Models\Areas;

class AreasService
{


    public static function store($data)
    {
        $data = collect($data);

      
    Areas::updateOrCreate(
        ['id' => $data->get('id')], // Match on `id` if provided
        $data->only(['name', 'code', 'zone_id'])->toArray() // Fields to update/insert
    );
        
    }
}
