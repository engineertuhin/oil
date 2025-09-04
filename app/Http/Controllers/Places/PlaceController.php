<?php

namespace App\Http\Controllers\Places;

use App\Http\Controllers\Controller;
use App\Models\Areas;
use App\Models\Districts;
use App\Models\Upazila;
use App\Models\Zone;

class PlaceController extends Controller
{

    public function districtGet($ids = false)
    {
        $district = $ids  ?  Districts::whereIn('zone_id', json_decode($ids))->get() : [];
        return response()->json($district);
    }
    public function areaGet($ids = false)
    {
     
        $areas = $ids  ?  Areas::whereIn('district_id', json_decode($ids))->get() : [];
        return response()->json($areas);
    }
}
