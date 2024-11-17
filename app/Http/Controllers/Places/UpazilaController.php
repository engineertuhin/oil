<?php

namespace App\Http\Controllers\Places;

use App\Http\Controllers\Controller;
use App\Models\Areas;
use App\Models\Districts;
use App\Models\Upazila;
use App\Service\Districts\DistrictsService;
use App\Service\Upazila\UpazilaService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UpazilaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $getData = Upazila::orderByDesc('id')->get();
        $areas = Areas::orderByDesc('id')->get();
        return Inertia::render('Place/Upazila/Upazila',compact('getData','areas'));
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        UpazilaService::store(filterRequest());
        $getData = Upazila::orderByDesc('id')->get();
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
        Upazila::find($id)->delete();
        $getData = Upazila::orderByDesc('id')->get();
        return response()->json(['message' => 'Operation success', 'data'=> $getData]);
    }
}
