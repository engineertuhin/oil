<?php

namespace App\Http\Controllers\Places;

use App\Http\Controllers\Controller;
use App\Models\Areas;
use App\Models\Districts;
use App\Models\Zone;
use App\Service\Zone\ZoneService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ZoneController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $getData = Zone::orderByDesc('id')->get();
        $districts = Districts::orderByDesc('id')->get();
        return Inertia::render('Place/Zone/Zone',compact('getData','districts'));
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        ZoneService::store(filterRequest());
        $getData = Zone::orderByDesc('id')->get();
        return response()->json(['message' => 'Operation success', 'data'=> $getData]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Zone::find($id)->delete();
        $getData = Zone::orderByDesc('id')->get();
        return response()->json(['message' => 'Operation success', 'data'=> $getData]);
    }
}
