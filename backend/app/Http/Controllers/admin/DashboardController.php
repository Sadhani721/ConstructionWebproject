<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
        return response()->json([
            'status' => true,
            'message' => 'Authenticated successfully!',
            'user' => auth()->user(),
            'token_valid' => auth()->check()
        ]);
    }
}
