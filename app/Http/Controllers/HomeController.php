<?php

namespace App\Http\Controllers;

use App\Models\Website;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {

        $websites = Website::all();
        return view('home.index', ['websites' => $websites]);

    }
}
