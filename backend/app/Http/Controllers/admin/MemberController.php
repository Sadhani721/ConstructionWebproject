<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class MemberController extends Controller
{
    //return all members
    public function index(){
        $members = Member::orderBy('created_at','DESC')->get();
        return response()->json([
            'status'=>true,
            'data'=>$members
        ]);
    }

    //insert/store members
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'job_title' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'errors'=>$validator->errors()
            ]);
        }

        $member = new Member();
        $member->name = $request->name;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->status = $request->status;
        $member->save();

        // Handle direct image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $ext = $image->getClientOriginalExtension();
            $fileName = strtotime('now') . $member->id . '.' . $ext;
            
            // Create directory if it doesn't exist
            $uploadDir = public_path('uploads/members');
            if (!File::exists($uploadDir)) {
                File::makeDirectory($uploadDir, 0755, true);
            }
            
            // Save and resize image
            $destPath = $uploadDir . '/' . $fileName;
            $manager = new ImageManager(Driver::class);
            $imageObj = $manager->read($image->getPathname());
            $imageObj->coverDown(400, 500);
            $imageObj->save($destPath);
            
            $member->image = $fileName;
            $member->save();
        }
        // Fallback: save temp image here
        else if($request->imageId > 0){
            $tempImage = TempImage::find($request->imageId);
            if($tempImage != null){
                $extArray = explode('.',$tempImage->name);
                $ext = last($extArray);

                $fileName = strtotime('now').$member->id.'.'.$ext;

                // Create directory if it doesn't exist
                $uploadDir = public_path('uploads/members');
                if (!File::exists($uploadDir)) {
                    File::makeDirectory($uploadDir, 0755, true);
                }

                //create small thumbnail here
                $sourcePath = public_path('uploads/temp/'.$tempImage->name);
                $destPath = $uploadDir . '/' . $fileName;
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(400, 500);
                $image->save($destPath);

                $member->image = $fileName;
                $member->save();
            }
        }

        return response()->json([
            'status'=>true,
            'message'=>'Member added successfully.'
        ]);

    }

    //return a single member
    public function show($id){
        $members = Member::find($id);

        if($members == null){
            return response()->json([
                'status'=>false,
                'errors'=>'member not found'
            ]);
        }

        return response()->json([
            'status'=>true,
            'data'=>$members
        ]);
    }

    //update a single member data
    public function update(Request $request, $id){
        $members = Member::find($id);

        if($members == null){
            return response()->json([
                'status'=>false,
                'errors'=>'member not found'
            ]);
        }

        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'job_title' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'errors'=>$validator->errors()
            ]);
        }

        $members->name = $request->name;
        $members->job_title = $request->job_title;
        $members->linkedin_url = $request->linkedin_url;
        $members->status = $request->status;
        $members->save();

        // Handle direct image upload
        if ($request->hasFile('image')) {
            $oldImage = $members->image;
            
            $image = $request->file('image');
            $ext = $image->getClientOriginalExtension();
            $fileName = strtotime('now') . $members->id . '.' . $ext;
            
            // Create directory if it doesn't exist
            $uploadDir = public_path('uploads/members');
            if (!File::exists($uploadDir)) {
                File::makeDirectory($uploadDir, 0755, true);
            }
            
            // Save and resize image
            $destPath = $uploadDir . '/' . $fileName;
            $manager = new ImageManager(Driver::class);
            $imageObj = $manager->read($image->getPathname());
            $imageObj->coverDown(400, 500);
            $imageObj->save($destPath);
            
            $members->image = $fileName;
            $members->save();
            
            // Delete old image
            if($oldImage != ''){
                File::delete(public_path('uploads/members/'.$oldImage));
            }
        }
        // Fallback: save temp image here
        else if($request->imageId > 0){
            $oldImage = $members->image;

            $tempImage = TempImage::find($request->imageId);
            if($tempImage != null){
                $extArray = explode('.',$tempImage->name);
                $ext = last($extArray);

                $fileName = strtotime('now').$members->id.'.'.$ext;

                // Create directory if it doesn't exist
                $uploadDir = public_path('uploads/members');
                if (!File::exists($uploadDir)) {
                    File::makeDirectory($uploadDir, 0755, true);
                }

                //create small thumbnail here
                $sourcePath = public_path('uploads/temp/'.$tempImage->name);
                $destPath = $uploadDir . '/' . $fileName;
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(400, 500);
                $image->save($destPath);

                $members->image = $fileName;
                $members->save();

                if($oldImage != ''){
                    File::delete(public_path('uploads/members/'.$oldImage));
                }
            }
        }

        return response()->json([
            'status'=>true,
            'message'=>'Member added successfully.'
        ]);


    }

    //delete a member from db
    public function destroy($id){
        $members = Member::find($id);

        if($members == null){
            return response()->json([
                'status'=>false,
                'errors'=>'member not found'
            ]);
        }

        if($members->image != ''){
            File::delete(public_path('uploads/members/'.$members->image));
        }

        $members->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Member deleted successfully'
        ]);
    }
}