<?php

namespace App\Service\Garage;

use App\Models\Garages;
use App\Models\Retailer;


class GarageService
{


    public static function store($data)
    {
        $data = collect($data);

        Garages::updateOrCreate(
            ['id' => $data->get('id')], 
            $data->toArray() 
        );
    }
}
