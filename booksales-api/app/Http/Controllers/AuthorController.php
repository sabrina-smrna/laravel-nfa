<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    // GET /api/authors
    public function index()
    {
        $authors = Author::with('books')->get();

        return response()->json([
            'status' => 'success',
            'data' => $authors
        ], 200);
    }

    // GET /api/authors/{id}
    public function show($id)
    {
        $author = Author::with('books')->find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $author
        ], 200);
    }

    // POST /api/authors
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'country' => 'nullable|string',
            'biography' => 'nullable|string'
        ]);

        $author = Author::create($validated);

        return response()->json([
            'status' => 'success',
            'data' => $author
        ], 201);
    }

    // PUT /api/authors/{id}
    public function update(Request $request, $id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }

        $author->update($request->all());

        return response()->json([
            'status' => 'success',
            'data' => $author
        ], 200);
    }

    // DELETE /api/authors/{id}
    public function destroy($id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }

        $author->delete();

        return response()->json(['message' => 'Author deleted successfully'], 200);
    }
}
