<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\ClientHierarchies;
use App\Models\Designations;
use App\Models\Districts;
use App\Models\User;
use App\Models\Zone;
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
        $initialData['designation'] = ClientHierarchies::get();
        $initialData['gender'] = gender();
        $initialData['zone'] = Zone::get();
        $initialData['data'] = Client::with('clientHierarchiesAttach')->orderByDesc('id')->get();
        $initialData['code'] = generateCode('C', Client::class);
        $initialData['user'] = User::orderByDesc('id')->with(['designation' => function ($quarry) {
            $quarry->whereNot('level', 1);
        }])->get();

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
        $initialData['code'] = generateCode('C', Client::class);
        $initialData['client'] = Client::with('clientHierarchiesAttach')->orderByDesc('id')->get();
        return response()->json(['message' => 'Operation success', 'data' =>  $initialData]);
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
        $user = Client::find($id);
        fileWithDataProcess($user, $user->profile_picture, 'profile_picture');
        $user->delete();
        $initialData['code'] = generateCode('C', Client::class);
        $initialData['client'] = Client::with('clientHierarchiesAttach')->orderByDesc('id')->get();
        return response()->json(['message' => 'Operation success', 'data' => $initialData]);
    }
}
