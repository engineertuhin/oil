<?php

namespace App\Http\Controllers\Garage;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Garages;
use App\Models\GaragesType;
use App\Service\Garage\GarageService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Pest\Laravel\delete;

class GarageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $initialData['data'] =Garages::orderByDesc('id')->get();
        $initialData['client'] = Client::with('clientHierarchiesAttach')->orderByDesc('id')->get();
        $initialData['code'] = generateCode('G', Garages::class);
        $initialData['garage_type'] = GaragesType::get();
        return Inertia::render('Garage/Garage', compact('initialData'));
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
       
        GarageService::store(filterRequest());
        $initialData['data'] = Garages::orderByDesc('id')->get();
        $initialData['code'] = generateCode('G', Garages::class);
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
        Garages::find($id)->delete();
        $initialData['data'] = Garages::orderByDesc('id')->get();
        $initialData['code'] = generateCode('G', Garages::class);
        return response()->json(['message' => 'Operation success', 'data' => $initialData]);
    }
}
