<?php

namespace App\Service\Client;

use App\Models\Client;
use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ClientService
{

    public static function useStore($data)
    {
        DB::transaction(function () use ($data) {

          
            $data = array_filter($data, fn($value) => $value !== "undefined");
            $prepared = fileWithDataProcess($data, false, 'profile_picture');
            $prepared['is_active'] = 1;
            $client =  Client::updateOrCreate(
                ['id' => $data['id'] ?? null],
                $prepared->except('user_id')->toArray()
            );

            $client->clientUser()->sync(explode(',',$prepared['user_id']));
           
        });
    }
}
