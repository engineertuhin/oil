<?php

namespace App\Http\Controllers\Places;

use App\Http\Controllers\Controller;
use App\Models\Areas;
use App\Models\Upazila;
use App\Models\Zone;

class PlaceController extends Controller
{

    public function zoneGet($id = false)
    {
        $zone = $id  ?  Zone::where('district_id', $id)->get() : [];
        return response()->json($zone);
    }
    public function areaGet($id = false)
    {
        $areas = $id  ?  Areas::where('zone_id', $id)->get() : [];
        return response()->json($areas);
    }
}
