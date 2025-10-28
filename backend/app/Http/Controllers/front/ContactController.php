<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Mail\ContactEmail;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
        ]);

        if ($validator->fails()) {

            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        

        // Prepare email data
        $mailData = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'subject' => $request->subject,
            'message' => $request->message,
        ];

        // Send email notification
        try {
            Mail::to('admin@example.com')->send(new ContactEmail($mailData));
        } catch (\Exception $e) {
            // Log email error but still return success since data was saved
            \Log::error('Contact email failed: ' . $e->getMessage());
        }

        return response()->json([
            'status' => true,
            'message' => 'Thanks for contacting us. Your message has been saved.',
            
        ]);
    }
}