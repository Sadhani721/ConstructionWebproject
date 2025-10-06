<?php

namespace App\Http\Controllers;
use App\Models\TempImage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class adminTempImageController extends Controller
{
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:jpeg,png,jpg,gif',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => false,
                'errors' => $validator->errors('image')
            ]);
        }
        $image = $request->file('image');
       $ext = $image->getClientOriginalExtension();
            $imageName = strtotime('now').'.'.$ext; //121212212122.png

            //save image in temp images table
            $model = new TempImage();
            $model->name = $imageName;
            $model->save();

            //save image uploads/temp directory
            $image->move(public_path('uploads/temp/'), $imageName);

            //create small thumbnail
            $sourcePath = public_path('uploads/temp/'.$imageName);
            $destPath = public_path('uploads/temp/thumb/'.$imageName);
            $manager = new ImageManager(Driver::class);
            $image = $manager->read($sourcePath);
            $image->cover(300, 300);
            $image->save($destPath);

           

            return response()->json([
                'status' => true,
                'message' => 'Image uploaded successfully',
                'data' => $model
            ]);
    }

    public function index(){
        $tempImages = TempImage::all();
        
        return response()->json([
            'status' => true,
            'message' => 'Temp images retrieved successfully',
            'data' => $tempImages
        ]);
    }
}
