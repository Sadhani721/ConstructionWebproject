<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    //this method will return all active services
    public function index(){
        $services = Service::where('status',1)->orderBy('created_at','DESC')->get();
        
        // Add full image URLs
        $services->transform(function($service) {
            if($service->image) {
                $service->image_url = asset('uploads/services/large/' . $service->image);
                $service->small_image_url = asset('uploads/services/small/' . $service->image);
            } else {
                $service->image_url = null;
                $service->small_image_url = null;
            }
            return $service;
        });
        
        return response()->json([
            'status'=>true,
            'data'=>$services
        ]);

    }

    //this method will return latest active services
    public function latestServices(Request $request){
        $services = Service::where('status',1)
                    ->take($request->get('limit'))
                    ->orderBy('created_at','DESC')->get();
        
        // Add full image URLs
        $services->transform(function($service) {
            if($service->image) {
                $service->image_url = asset('uploads/services/large/' . $service->image);
                $service->small_image_url = asset('uploads/services/small/' . $service->image);
            } else {
                $service->image_url = null;
                $service->small_image_url = null;
            }
            return $service;
        });
        
        return response()->json([
            'status'=>true,
            'data'=>$services
        ]);
    }


    //return a single service
    public function service($id){
        $service = Service::find($id);

        if($service == null){
            return response()->json([
                'status'=>false,
                'message'=>'service not found'
            ]);
        }
        
        // Add full image URLs
        if($service->image) {
            $service->image_url = asset('uploads/services/large/' . $service->image);
            $service->small_image_url = asset('uploads/services/small/' . $service->image);
        } else {
            $service->image_url = null;
            $service->small_image_url = null;
        }
        
        return response()->json([
            'status'=>true,
            'data'=>$service
        ]);
    }
}