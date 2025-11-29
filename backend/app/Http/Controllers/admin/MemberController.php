<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = Member::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $members
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'job_title' => 'required|string|max:255',
        ]);

        if ($validator->passes()) {
            $member = new Member();
            $member->name = $request->name;
            $member->job_title = $request->job_title;
            $member->linkedin_url = $request->linkedin_url;
            $member->status = $request->status ?? true;
            $member->save();

            // Save Image
            if (!empty($request->image_id)) {
                $tempImage = TempImage::find($request->image_id);
                if ($tempImage != null) {
                    $extArray = explode('.', $tempImage->name);
                    $ext = last($extArray);
                    $newImageName = $member->id . '.' . $ext;

                    $sPath = public_path() . '/uploads/temp/' . $tempImage->name;
                    $dPath = public_path() . '/uploads/members/' . $newImageName;
                    
                    // Create directory if it doesn't exist
                    if (!File::exists(public_path() . '/uploads/members/')) {
                        File::makeDirectory(public_path() . '/uploads/members/', 0755, true);
                    }
                    
                    File::copy($sPath, $dPath);

                    $member->image = $newImageName;
                    $member->save();
                }
            }

            return response()->json([
                'status' => true,
                'message' => 'Member added successfully.'
            ]);
        } else {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $member = Member::find($id);
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
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $member = Member::find($id);
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found'
            ]);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'job_title' => 'required|string|max:255',
        ]);

        if ($validator->passes()) {
            $member->name = $request->name;
            $member->job_title = $request->job_title;
            $member->linkedin_url = $request->linkedin_url;
            $member->status = $request->status ?? true;
            $member->save();

            // Save Image
            if (!empty($request->image_id)) {
                // Delete old image
                if ($member->image) {
                    File::delete(public_path() . '/uploads/members/' . $member->image);
                }

                $tempImage = TempImage::find($request->image_id);
                if ($tempImage != null) {
                    $extArray = explode('.', $tempImage->name);
                    $ext = last($extArray);
                    $newImageName = $member->id . '.' . $ext;

                    $sPath = public_path() . '/uploads/temp/' . $tempImage->name;
                    $dPath = public_path() . '/uploads/members/' . $newImageName;
                    
                    // Create directory if it doesn't exist
                    if (!File::exists(public_path() . '/uploads/members/')) {
                        File::makeDirectory(public_path() . '/uploads/members/', 0755, true);
                    }
                    
                    File::copy($sPath, $dPath);

                    $member->image = $newImageName;
                    $member->save();
                }
            }

            return response()->json([
                'status' => true,
                'message' => 'Member updated successfully.'
            ]);
        } else {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $member = Member::find($id);
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => 'Member not found'
            ]);
        }

        // Delete image
        if ($member->image) {
            File::delete(public_path() . '/uploads/members/' . $member->image);
        }

        $member->delete();

        return response()->json([
            'status' => true,
            'message' => 'Member deleted successfully.'
        ]);
    }
}