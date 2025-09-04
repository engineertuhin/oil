<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Designations;
use App\Models\Districts;
use App\Models\EmployHierarchy;
use App\Models\User;
use App\Models\Zone;
use App\Service\Users\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $initialData['designation'] = EmployHierarchy::get();
        $initialData['code'] = generateCode('U', Designations::class);
        $initialData['gender'] = gender();
        $initialData['zone'] = Zone::orderByDesc('id')->get();
        $initialData['data'] = User::whereNot('role', null)->with('designation', 'areas', 'zone', 'district')->get();

        return Inertia::render('User/User', compact('initialData'));
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
        UserService::userStore(filterRequest());
        $initialData['code'] = generateCode('U', Designations::class);
        $initialData['user'] = User::whereNot('role', null)->with('designation', 'areas', 'zone', 'district')->get();
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
        $user = User::find($id);
        fileWithDataProcess($user, $user->profile_picture, 'profile_picture');
        $user->delete();
        $initialData['code'] = generateCode('U', Designations::class);
        $initialData['user'] = User::whereNot('role', null)->with('designation', 'areas', 'zone', 'district')->get();
        return response()->json(['message' => 'Operation success', 'data' => $initialData]);
    }
}
