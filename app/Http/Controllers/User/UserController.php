<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Districts;
use App\Models\User;
use App\Service\Users\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $initialData['designation'] = designation();
        $initialData['gender'] = gender();
        $initialData['district'] = Districts::get();
        $initialData['data'] = User::whereNot('role', null)->with('designation','areas')->get();

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

        return response()->json(['message' => 'Operation success', 'data' => User::whereNot('role', null)->with('designation','areas')->get()]);
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
     $user=User::find($id);
     fileWithDataProcess($user,$user->profile_picture,'profile_picture');
     $user->delete();
     return response()->json(['message' => 'Operation success', 'data' => User::whereNot('role', null)->with('designation','areas')->get()]);

    }
}
