<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\TransactionController;

/*
|--------------------------------------------------------------------------
| API Routes - Book Sales API (Laravel 12)
|--------------------------------------------------------------------------
*/

// ==========================
// 🔐 AUTH
// ==========================
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
});

// ==========================
// 🌍 PUBLIC ROUTES
// ==========================
Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);
Route::apiResource('genres', GenreController::class)->only(['index', 'show']);
Route::apiResource('books', BookController::class)->only(['index', 'show']);

// ==========================
// 🔒 PROTECTED ROUTES
// ==========================
Route::middleware(['auth:sanctum'])->group(function () {

    // ---------- 👑 ADMIN ----------
    Route::middleware('admin')->group(function () {
        Route::apiResource('authors', AuthorController::class)->only(['store', 'update', 'destroy']);
        Route::apiResource('genres', GenreController::class)->only(['store', 'update', 'destroy']);
        Route::apiResource('books', BookController::class)->only(['store', 'update', 'destroy']);

        // Admin hanya bisa lihat semua transaksi & hapus
        Route::get('/transactions', [TransactionController::class, 'index']);
        Route::delete('/transactions/{id}', [TransactionController::class, 'destroy']);
    });

    // ---------- 👤 CUSTOMER ----------
    Route::post('/transactions', [TransactionController::class, 'store']);     // Create transaksi
    Route::get('/transactions/{id}', [TransactionController::class, 'show']);  // Lihat transaksi miliknya
    Route::put('/transactions/{id}', [TransactionController::class, 'update']); // Update transaksi miliknya
    Route::get('/my-transactions', [TransactionController::class, 'myTransactions']); // List transaksi miliknya
});

// ==========================
// 🏠 DEFAULT
// ==========================
Route::get('/', function () {
    return response()->json([
        'app' => 'Book Sales API',
        'version' => '1.0',
        'message' => 'Welcome to Book Sales API (Laravel 12)',
    ]);
});
