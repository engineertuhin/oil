<?php

namespace App\Service\Upazila;

use App\Models\Upazila;

class UpazilaService
{


    public static function store($data)
    {
        $data = collect($data);

        Upazila::updateOrCreate(
            ['id' => $data->get('id')], // Match on `id` if provided
            $data->only(['name', 'code', 'area_id'])->toArray() // Fields to update/insert
        );
    }
}
