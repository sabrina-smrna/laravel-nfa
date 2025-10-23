<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorSeeder extends Seeder {
    public function run(): void {
        Author::insert([
            ['name'=>'J.K. Rowling','photo'=>null,'bio'=>'Penulis Harry Potter','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'George R.R. Martin','photo'=>null,'bio'=>'Penulis Game of Thrones','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Haruki Murakami','photo'=>null,'bio'=>'Penulis Jepang terkenal','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Jane Austen','photo'=>null,'bio'=>'Penulis klasik Inggris','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Paulo Coelho','photo'=>null,'bio'=>'Penulis Brasil','created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
