<?php

namespace App\Http\Controllers;

use App\Models\Genre;

class GenreController extends Controller
{
    public function index()
    {
        // panggil fungsi yang benar dari model
        $genres = Genre::allGenres();

        return view('genres.index', compact('genres'));
    }
}
