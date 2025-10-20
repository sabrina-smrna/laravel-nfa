<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;

Route::apiResource('authors', AuthorController::class);
Route::apiResource('genres', GenreController::class);


// //  route crud authors
// Route::get('/authors', [AuthorController::class, 'index']);
// Route::post('/authors', [AuthorController::class, 'store']);

// //  rote crud books
// Route::get('/books', [BookController::class, 'index']);

// // route crud genres

// Route::get('/genres', [GenreController::class, 'index']);
// Route::post('/genres', [GenreController::class, 'store']);
