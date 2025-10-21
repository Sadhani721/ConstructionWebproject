<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //this method will return all active projects
    public function index(){
        $projects = Project::where('status',1)->orderBy('created_at','DESC')->get();
        
        // Add full image URLs
        $projects->transform(function($project) {
            if($project->image) {
                $project->image_url = asset('uploads/projects/large/' . $project->image);
                $project->small_image_url = asset('uploads/projects/small/' . $project->image);
            } else {
                $project->image_url = null;
                $project->small_image_url = null;
            }
            return $project;
        });
        
        return response()->json([
            'status'=>true,
            'data'=>$projects
        ]);

    }

    //this method will return latest active projects
    public function latestProjects(Request $request){
        $projects = Project::where('status',1)
                    ->take($request->get('limit'))
                    ->orderBy('created_at','DESC')->get();
        
        // Add full image URLs
        $projects->transform(function($project) {
            if($project->image) {
                $project->image_url = asset('uploads/projects/large/' . $project->image);
                $project->small_image_url = asset('uploads/projects/small/' . $project->image);
            } else {
                $project->image_url = null;
                $project->small_image_url = null;
            }
            return $project;
        });
        
        return response()->json([
            'status'=>true,
            'data'=>$projects
        ]);
    }


    //return a single project
    public function project($id){
        $project = Project::find($id);

        if($project == null){
            return response()->json([
                'status'=>false,
                'message'=>'project not found'
            ]);
        }
        
        // Add full image URLs
        if($project->image) {
            $project->image_url = asset('uploads/projects/large/' . $project->image);
            $project->small_image_url = asset('uploads/projects/small/' . $project->image);
        } else {
            $project->image_url = null;
            $project->small_image_url = null;
        }
        
        return response()->json([
            'status'=>true,
            'data'=>$project
        ]);
    }
}