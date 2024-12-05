<?php

namespace App\Http\Controllers\Places;

use App\Http\Controllers\Controller;
use App\Models\Areas;
use App\Models\Districts;
use App\Models\User;
use App\Models\userZone;


class PlaceController extends Controller
{

    public static function userData($ids){
    return    User::join('designations', 'designations.user_id', '=', 'users.id')
        ->join('user_zones', 'user_zones.user_id', '=', 'users.id')
        ->join('client_hierarchies', 'client_hierarchies.label', '=', 'designations.id')
        ->whereIn('user_zones.zone_id', json_decode($ids))
        ->select('users.*','designations.code','client_hierarchies.name as hierarchies_name') 
        ->get();
    }

    public function districtGet($ids = false)
    {
        $district = $ids  ?  Districts::whereIn('zone_id', json_decode($ids))->get() : [];

        $users = self::userData($ids);

        return response()->json(['district' =>  $district, 'user' => $users]);
    }
    public function areaGet($ids = false)
    {

        $areas = $ids  ?  Areas::whereIn('district_id', json_decode($ids))->get() : [];
        $users = self::userData($ids);
        return response()->json(['areas' =>  $areas, 'user' => $users]);
    }
}
