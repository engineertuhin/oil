<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\ClientHierarchies;
use App\Models\Designations;
use App\Models\Districts;
use App\Models\FleetType;
use App\Models\GaragesType;
use App\Models\User;
use App\Models\Zone;
use App\Service\Client\ClientService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        $initialData['data'] = Client::with('clientUser')->orderByDesc('id')->get();
        $initialData['code'] = generateCode('C', Client::class);
        $initialData['garage'] = GaragesType::get();
        $initialData['fleet'] =FleetType::get();
        $initialData['user'] = User::whereNot('role', null)->orderByDesc('id')->with(['designation' => function ($quarry) {
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

    public function clientGet()
    {

        $client = Client::where(request()->key, request()->value)->whereBetween('client_hierarchies_id', [2, 3])->get();
        return response()->json($client);
    }
    public function userGet($id)
    {

        $data = DB::table('client_user')
        ->where('client_id', $id)
        ->pluck('user_id'); // Fetch user IDs for the given client
    
    $user = DB::table('users')
        ->join('designations', 'designations.user_id', '=', 'users.id') 
        ->join('user_zones', 'user_zones.user_id', '=', 'users.id') 
        ->join('client_hierarchies', 'client_hierarchies.label', '=', 'designations.id')
        ->whereIn('users.id', $data) // Filter users by the plucked IDs
        ->select(
            'users.*', // Fetch all user columns
            'designations.code as code',
            'client_hierarchies.name as hierarchies_name' // Alias for clarity
        )
        ->get();
    

        return response()->json($user);
    }
}
