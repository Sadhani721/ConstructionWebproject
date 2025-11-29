<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials = Testimonial::where('status', 1)
                                  ->orderBy('created_at', 'DESC')
                                  ->get();
        
        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $testimonial = Testimonial::where('status', 1)->find($id);
        
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
     * Get latest testimonials for homepage
     */
    public function latestTestimonials()
    {
        $testimonials = Testimonial::where('status', 1)
                                  ->orderBy('created_at', 'DESC')
                                  ->limit(6)
                                  ->get();
        
        return response()->json([
            'status' => true,
            'data' => $testimonials
        ]);
    }
}
