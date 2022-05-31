<?php

namespace App\Http\Controllers;

use App\Models\Website;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {

        $websites = Website::all();
        if(request()->has('search_query')) {

            $websites = Website::where('title' , 'like' , "%".request('search_query')."%")->get();

        }
        // dd($websites);
        return view('home.index', ['websites' => $websites]);

    }
}
