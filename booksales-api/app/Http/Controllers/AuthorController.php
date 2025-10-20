<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    // GET /api/authors
    public function index()
    {
        $authors = Author::all();

        return response()->json([
            'status' => 'success',
            'data' => $authors
        ], 200);
    }

    // POST /api/authors
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'country' => 'nullable|string|max:100',
            'biography' => 'nullable|string'
        ]);

        $author = Author::create($validated);

        return response()->json([
            'status' => 'success',
            'data' => $author
        ], 201);
    }

    // GET /api/authors/{id}
    public function show($id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json([
                'status' => 'error',
                'message' => 'Author yang kamu cari belum terdaftar nih'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $author
        ], 200);
    }

    // PUT /api/authors/{id}
    public function update(Request $request, $id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json([
                'status' => 'error',
                'message' => 'Author not found'
            ], 404);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'country' => 'nullable|string|max:100',
            'biography' => 'nullable|string'
        ]);

        $author->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Author updated successfully',
            'data' => $author
        ], 200);
    }

    // DELETE /api/authors/{id}
    public function destroy($id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json([
                'status' => 'error',
                'message' => 'Author not found'
            ], 404);
        }

        $author->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Author deleted successfully'
        ], 200);
    }
}
