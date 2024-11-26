<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Client\ClientController;
use App\Http\Controllers\Garage\GarageController;
use App\Http\Controllers\Places\AreasController;
use App\Http\Controllers\Places\DistrictController;
use App\Http\Controllers\Places\PlaceController;
use App\Http\Controllers\Places\ZoneController;
use App\Http\Controllers\Report\ReportController;
use App\Http\Controllers\Retailer\RetailerController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    Route::get('/', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
    Route::post('/', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::resource('districts', DistrictController::class);
    Route::resource('areas', AreasController::class);
    Route::resource('zone', ZoneController::class);
    Route::resource('user', UserController::class);
    Route::resource('client', ClientController::class);
    Route::resource('retailer', RetailerController::class);
    Route::resource('garage', GarageController::class);

    Route::prefix('report')->group(function () {
        Route::get('organography', [ReportController::class, 'organography'])->name('organography');
    });


    Route::post('get/area/{id}', [PlaceController::class, 'areaGet'])->name('getArea');
    Route::post('get/district/{ids}', [PlaceController::class, 'districtGet'])->name('getDistrict');


    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
