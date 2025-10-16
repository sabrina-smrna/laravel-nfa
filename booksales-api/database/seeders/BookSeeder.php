<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('books')->insert([
            ['title' => 'Harry Potter', 'genre' => 'Fantasy', 'author_id' => 1, 'published_year' => 1997],
            ['title' => 'A Game of Thrones', 'genre' => 'Fantasy', 'author_id' => 2, 'published_year' => 1996],
            ['title' => 'Norwegian Wood', 'genre' => 'Romance', 'author_id' => 3, 'published_year' => 1987],
            ['title' => 'Pride and Prejudice', 'genre' => 'Romance', 'author_id' => 4, 'published_year' => 1813],
            ['title' => 'The Alchemist', 'genre' => 'Adventure', 'author_id' => 5, 'published_year' => 1988],
        ]);
    }
}
