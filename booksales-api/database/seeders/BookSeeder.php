<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder {
    public function run(): void {
        // assume authors 1..5 and genres 1..5 exist
        Book::insert([
            ['title'=>'Harry Potter','description'=>'Wizard novel','price'=>120000,'stock'=>10,'cover_photo'=>null,'genre_id'=>1,'author_id'=>1,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'A Game of Thrones','description'=>'Epic fantasy','price'=>150000,'stock'=>8,'cover_photo'=>null,'genre_id'=>1,'author_id'=>2,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Norwegian Wood','description'=>'Romance novel','price'=>90000,'stock'=>7,'cover_photo'=>null,'genre_id'=>2,'author_id'=>3,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Pride and Prejudice','description'=>'Classic romance','price'=>80000,'stock'=>5,'cover_photo'=>null,'genre_id'=>2,'author_id'=>4,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'The Alchemist','description'=>'Spiritual journey','price'=>95000,'stock'=>12,'cover_photo'=>null,'genre_id'=>3,'author_id'=>5,'created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
