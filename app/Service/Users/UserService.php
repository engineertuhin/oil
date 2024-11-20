<?php

namespace App\Service\Users;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserService
{

    public static function userStore($data)
    {
        DB::transaction(function () use ($data) {
            $prepared = fileWithDataProcess($data, false, 'profile_picture');
            $prepared['role'] = 1; //after adding  just give static  value
            $prepared['is_active'] = 1; //after adding  just give static  value
            $prepared['last_login_at'] = now();
            $onlyUserTable = ['name', 'email', 'password', 'profile_picture', 'role', 'is_active', 'last_login_at'];


            isset($prepared['password']) ?   $prepared['password'] = Hash::make($prepared['password']) :  array_diff($onlyUserTable, ['password']);
            $user =  User::updateOrCreate(
                ['id' => $data['id'] ?? null],
                $prepared->only($onlyUserTable)->toArray()
            );

            $positionNo = array_search($prepared['designation'], designation());
            $prepared['level'] = $positionNo;
            // Add designation wise Data 
            $user->designation()->updateOrCreate(
                ['user_id' => $user->id],
                $prepared->except($onlyUserTable)->except('id', 'area_id')->toArray()
            );

            // Add Multiple Areas
            if (!empty($data['area_id'])) {
                $areaIds = json_decode($data['area_id']);
                $ids = array_map(function ($zone) {
                    return $zone->id;
                }, $areaIds);
                $user->areas()->sync($ids);
            }
        });
    }
}
