<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Places\AreasController;
use App\Http\Controllers\Places\DistrictController;
use App\Http\Controllers\Places\UpazilaController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    Route::get('/', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
    Route::post('/', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::resource('districts', DistrictController::class);
    Route::resource('areas', AreasController::class);
    Route::resource('upazila', UpazilaController::class);
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
