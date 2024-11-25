<?php

namespace App\Service\Zone;

use App\Models\Zone;

class ZoneService
{


    public static function store($data)
    {
        $data = collect($data);

        Zone::updateOrCreate(
            ['id' => $data->get('id')], // Match on `id` if provided
            $data->only(['name', 'code', 'district_id'])->toArray() // Fields to update/insert
        );
    }
}
