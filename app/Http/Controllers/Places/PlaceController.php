<?php

namespace App\Http\Controllers\Places;

use App\Http\Controllers\Controller;
use App\Models\Areas;
use App\Models\Upazila;

class PlaceController extends Controller
{

    public function areaGet($id = false)
    {
        $area = $id  ?  Areas::where('district_id', $id)->get() : [];
        return response()->json($area);
    }
    public function upazilaGet($id = false)
    {
        $upazila = $id  ?  Upazila::where('area_id', $id)->get() : [];
        return response()->json($upazila);
    }
}
