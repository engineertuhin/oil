<?php

namespace App\Http\Controllers\Retailer;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Retailer;
use App\Service\Retailer\RetailerService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RetailerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $initialData['data'] = Retailer::orderByDesc('id')->get();
        $initialData['client'] = Client::with('clientHierarchiesAttach')->orderByDesc('id')->get();
        $initialData['code'] = generateCode('R', Retailer::class);
        return Inertia::render('Retailer/Retailer', compact('initialData'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        RetailerService::store(filterRequest());

        $initialData['data'] = Retailer::orderByDesc('id')->get();
        $initialData['code'] = generateCode('R', Retailer::class);
        return response()->json(['message' => 'Operation success', 'data' => $initialData]);
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
        Retailer::find($id)->delete();
        $initialData['data'] = Retailer::orderByDesc('id')->get();
        $initialData['code'] = generateCode('R', Retailer::class);
        return response()->json(['message' => 'Operation success', 'data' => $initialData]);
    }
}
