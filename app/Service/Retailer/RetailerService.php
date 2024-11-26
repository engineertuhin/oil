<?php

namespace App\Service\Retailer;

use App\Models\Retailer;


class RetailerService
{


    public static function store($data)
    {
        $data = collect($data);

        Retailer::updateOrCreate(
            ['id' => $data->get('id')], 
            $data->toArray() 
        );
    }
}
