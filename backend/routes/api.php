<?php
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\front\ServiceController as frontServiceController;
use App\Http\Controllers\front\ProjectController as frontProjectController;


Route::post('authenticate', [AuthenticationController::class, 'authenticate']);
Route::get('get-services', [frontServiceController::class, 'index']);
Route::get('get-latest-services', [frontServiceController::class, 'latestServices']); // Added plural version

// Public Projects Routes (Frontend)
Route::get('get-projects', [frontProjectController::class, 'index']);
Route::get('get-latest-projects', [frontProjectController::class, 'latestProjects']);
Route::get('get-project/{id}', [frontProjectController::class, 'show']);

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
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);

    // Temporary Image Upload Routes
    Route::post('temp-images', [TempImageController::class, 'store']);
    Route::get('temp-images', [TempImageController::class, 'index']);

    // Projects Routes
    Route::post('projects', [ProjectController::class, 'store']);
    

    });
