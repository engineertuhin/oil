<?php

namespace App\Http\Controllers\Places;

use App\Http\Controllers\Controller;
use App\Models\Areas;
use App\Models\Districts;
use App\Models\Zone;
use App\Service\Areas\AreasService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AreasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $getData = Areas::orderByDesc('id')->with('district')->get();
        $districtList = Districts::orderByDesc('id')->get();
        return Inertia::render('Place/Areas/Areas',compact('getData','districtList'));
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        AreasService::store(filterRequest());
        $getData = Areas::orderByDesc('id')->with('district')->get();
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
        Areas::find($id)->delete();
        $getData = Areas::orderByDesc('id')->with('district')->get();
        return response()->json(['message' => 'Operation success', 'data'=> $getData]);
    }
}
