<?php

namespace App\Service\Districts;

use App\Models\Districts;

class DistrictsService
{


    public static function store($data)
    {
        $data = collect($data);
        Districts::updateOrCreate(
            ['id' => $data->get('id')], // Match on `id` if provided
            $data->only(['name', 'code'])->toArray() // Fields to update/insert
        );
        
    }
}
