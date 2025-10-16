<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('authors')->insert([
            ['name' => 'J.K. Rowling', 'country' => 'United Kingdom'],
            ['name' => 'George R.R. Martin', 'country' => 'United States'],
            ['name' => 'Haruki Murakami', 'country' => 'Japan'],
            ['name' => 'Jane Austen', 'country' => 'United Kingdom'],
            ['name' => 'Paulo Coelho', 'country' => 'Brazil'],
        ]);
    }
}
