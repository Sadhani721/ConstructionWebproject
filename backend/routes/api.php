<?php
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\adminTempImageController;


Route::post('authenticate', [AuthenticationController::class, 'authenticate']);
Route::post('login', [AuthenticationController::class, 'authenticate'])->name('login');
Route::get('logout', [AuthenticationController::class, 'logout']);
Route::get('services', [ServiceController::class, 'index']);
Route::post('services', [ServiceController::class, 'store']);


// Debug route to test if API is working
Route::get('test', function() {
    return response()->json(['message' => 'API is working!', 'status' => true]);
});

//Route::get('/user', function (Request $request) {
   // return $request->user();
//})->middleware('auth:sanctum');


Route::group(['middleware' => ['auth:sanctum']], function () {
    //Protected Routes
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::get('logout', [AuthenticationController::class, 'logout']);


// Services Routes
    Route::post('services', [ServiceController::class, 'store']);
    Route::get('services', [ServiceController::class, 'index']);
//Temp image Routes
    Route::post('temp-images', [adminTempImageController::class, 'store']);
    Route::get('temp-images', [adminTempImageController::class, 'index']);

    });
