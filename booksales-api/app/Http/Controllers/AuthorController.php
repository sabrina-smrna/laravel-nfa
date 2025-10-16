<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = [
            [
                'name' => 'J.K. Rowling',
                'nationality' => 'British',
                'biography' => 'Author of the Harry Potter series, which became one of the best-selling book series in history.',
            ],
            [
                'name' => 'George R.R. Martin',
                'nationality' => 'American',
                'biography' => 'Famous for his epic fantasy series "A Song of Ice and Fire", adapted into Game of Thrones.',
            ],
            [
                'name' => 'Haruki Murakami',
                'nationality' => 'Japanese',
                'biography' => 'Known for surreal and introspective novels like "Kafka on the Shore" and "Norwegian Wood".',
            ],
            [
                'name' => 'Jane Austen',
                'nationality' => 'British',
                'biography' => 'Iconic novelist of romantic fiction, author of Pride and Prejudice and Sense and Sensibility.',
            ],
            [
                'name' => 'Paulo Coelho',
                'nationality' => 'Brazilian',
                'biography' => 'Inspirational writer best known for "The Alchemist", focusing on destiny and dreams.',
            ],
        ];

        return view('authors.index', compact('authors'));
    }
}
