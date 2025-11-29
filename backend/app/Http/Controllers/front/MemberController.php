<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = Member::where('status', 1)
                        ->orderBy('created_at', 'DESC')
                        ->get();
        
        return response()->json([
            'status' => true,
            'data' => $members
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $member = Member::where('status', 1)->find($id);
        
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $member
        ]);
    }

    /**
     * Get latest members for homepage
     */
    public function latestMembers()
    {
        $members = Member::where('status', 1)
                        ->orderBy('created_at', 'DESC')
                        ->limit(6)
                        ->get();
        
        return response()->json([
            'status' => true,
            'data' => $members
        ]);
    }
}