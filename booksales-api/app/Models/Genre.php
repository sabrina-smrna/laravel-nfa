<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    public static function allGenres()
    {
        return [
            [
                'name' => 'Fantasy',
                'description' => 'Stories full of magic and wonder.',
                'image' => 'https://picsum.photos/300/200?random=1'
            ],
            [
                'name' => 'Romance',
                'description' => 'Love stories that warm the heart.',
                'image' => 'https://picsum.photos/300/200?random=2'
            ],
            [
                'name' => 'Horror',
                'description' => 'Tales that chill your spine.',
                'image' => 'https://picsum.photos/300/200?random=3'
            ],
            [
                'name' => 'Science Fiction',
                'description' => 'Imaginative stories about the future.',
                'image' => 'https://picsum.photos/300/200?random=4'
            ],
            [
                'name' => 'Mystery',
                'description' => 'Unravel puzzles and secrets.',
                'image' => 'https://picsum.photos/300/200?random=5'
            ],
        ];
    }
}
