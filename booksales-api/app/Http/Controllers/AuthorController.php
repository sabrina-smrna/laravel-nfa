<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    // ✅ READ ALL (Public)
    public function index()
    {
        $authors = Author::all();
        return response()->json($authors);
    }

    // ✅ SHOW (Public)
    public function show($id)
    {
        $author = Author::find($id);
        if (!$author) {
            return response()->json(['error' => 'Author not found'], 404);
        }
        return response()->json($author);
    }

    // 🔒 CREATE (Admin Only)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'  => 'required|string|max:255',
            'bio'   => 'nullable|string',
            'photo' => 'nullable|string',
        ]);

        $author = Author::create($validated);
        return response()->json([
            'message' => 'Author created successfully',
            'data' => $author
        ], 201);
    }

    // 🔒 UPDATE (Admin Only)
    public function update(Request $request, $id)
    {
        $author = Author::find($id);
        if (!$author) {
            return response()->json(['error' => 'Author not found'], 404);
        }

        $validated = $request->validate([
            'name'  => 'required|string|max:255',
            'bio'   => 'nullable|string',
            'photo' => 'nullable|string', 
        ]);

        $author->update($validated);
        return response()->json([
            'message' => 'Author updated successfully',
            'data' => $author
        ]);
    }

    // 🔒 DESTROY (Admin Only)
    public function destroy($id)
    {
        $author = Author::find($id);
        if (!$author) {
            return response()->json(['error' => 'Author not found'], 404);
        }

        $author->delete();
        return response()->json(['message' => 'Author deleted successfully']);
    }
}
