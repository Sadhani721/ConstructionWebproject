<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials = Testimonial::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'testimonial' => 'required'
        ]);

        if ($validator->passes()) {
            $testimonial = new Testimonial();
            $testimonial->name = $request->name;
            $testimonial->designation = $request->designation;
            $testimonial->testimonial = $request->testimonial;
            $testimonial->status = $request->status;
            $testimonial->save();

            // Save Image
            if (!empty($request->image_id)) {
                $tempImage = TempImage::find($request->image_id);
                if ($tempImage != null) {
                    $extArray = explode('.', $tempImage->name);
                    $ext = last($extArray);
                    $newImageName = $testimonial->id . '.' . $ext;

                    $sPath = public_path() . '/uploads/temp/' . $tempImage->name;
                    $dPath = public_path() . '/uploads/testimonials/' . $newImageName;
                    File::copy($sPath, $dPath);

                    $testimonial->image = $newImageName;
                    $testimonial->save();
                }
            }

            return response()->json([
                'status' => true,
                'message' => 'Testimonial added successfully.'
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
        $testimonial = Testimonial::find($id);
        if ($testimonial == null) {
            return response()->json([
                'status' => false,
                'message' => 'Testimonial not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $testimonial
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::find($id);
        if ($testimonial == null) {
            return response()->json([
                'status' => false,
                'message' => 'Testimonial not found'
            ]);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'testimonial' => 'required'
        ]);

        if ($validator->passes()) {
            $testimonial->name = $request->name;
            $testimonial->designation = $request->designation;
            $testimonial->testimonial = $request->testimonial;
            $testimonial->status = $request->status;
            $testimonial->save();

            // Save Image
            if (!empty($request->image_id)) {
                // Delete old image
                File::delete(public_path() . '/uploads/testimonials/' . $testimonial->image);

                $tempImage = TempImage::find($request->image_id);
                if ($tempImage != null) {
                    $extArray = explode('.', $tempImage->name);
                    $ext = last($extArray);
                    $newImageName = $testimonial->id . '.' . $ext;

                    $sPath = public_path() . '/uploads/temp/' . $tempImage->name;
                    $dPath = public_path() . '/uploads/testimonials/' . $newImageName;
                    File::copy($sPath, $dPath);

                    $testimonial->image = $newImageName;
                    $testimonial->save();
                }
            }

            return response()->json([
                'status' => true,
                'message' => 'Testimonial updated successfully.'
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
        $testimonial = Testimonial::find($id);
        if ($testimonial == null) {
            return response()->json([
                'status' => false,
                'message' => 'Testimonial not found'
            ]);
        }

        // Delete image
        File::delete(public_path() . '/uploads/testimonials/' . $testimonial->image);

        $testimonial->delete();

        return response()->json([
            'status' => true,
            'message' => 'Testimonial deleted successfully.'
        ]);
    }
}
