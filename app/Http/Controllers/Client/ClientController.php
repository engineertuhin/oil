<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Districts;
use App\Models\User;
use App\Service\Client\ClientService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $initialData['designation'] = clientDesignation();
        $initialData['gender'] = gender();
        $initialData['district'] = Districts::get();
        $initialData['data'] = Client::orderByDesc('id')->get();

        return Inertia::render('Client/Client', compact('initialData'));
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
        ClientService::useStore(filterRequest());
        return response()->json(['message' => 'Operation success', 'data' =>  Client::orderByDesc('id')->get()]);
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
     $user=Client::find($id);
     fileWithDataProcess($user,$user->profile_picture,'profile_picture');
     $user->delete();
     return response()->json(['message' => 'Operation success', 'data' => Client::orderByDesc('id')->get()]);

    }
}
