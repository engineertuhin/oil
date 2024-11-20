<?php

namespace App\Http\Controllers\Places;

use App\Http\Controllers\Controller;
use App\Models\Districts;
use App\Models\Zone;
use App\Service\Districts\DistrictsService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $initialData['districts'] = Districts::orderByDesc('id')->with('zone')->get();
        $initialData['zone'] = Zone::orderByDesc('id')->get();
        return Inertia::render('Place/Districts/Districts', compact('initialData'));
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        DistrictsService::store(filterRequest());
        $getData = Districts::orderByDesc('id')->with('zone')->get();
        return response()->json(['message' => 'Operation success', 'data' => $getData]);
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
        Districts::find($id)->delete();
        $getData = Districts::orderByDesc('id')->with('zone')->get();
        return response()->json(['message' => 'Operation success', 'data' => $getData]);
    }
}
