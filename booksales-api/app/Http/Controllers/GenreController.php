<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    // GET /api/genres
    public function index()
    {
        $genres = Genre::all();

        return response()->json([
            'status' => 'success',
            'data' => $genres
        ], 200);
    }

    // POST /api/genres
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string'
        ]);

        $genre = Genre::create($validated);

        return response()->json([
            'status' => 'success',
            'data' => $genre
        ], 201);
    }

    // GET /api/genres/{id}
    public function show($id)
    {
        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json([
                'status' => 'error',
                'message' => 'Genre yang kamu cari sepertinya belum ada'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $genre
        ], 200);
    }

    // PUT /api/genres/{id}
    public function update(Request $request, $id)
    {
        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json([
                'status' => 'error',
                'message' => 'Genre not found'
            ], 404);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string'
        ]);

        $genre->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Genre updated successfully',
            'data' => $genre
        ], 200);
    }

    // DELETE /api/genres/{id}
    public function destroy($id)
    {
        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json([
                'status' => 'error',
                'message' => 'Genre not found'
            ], 404);
        }

        $genre->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Genre deleted successfully'
        ], 200);
    }
}
