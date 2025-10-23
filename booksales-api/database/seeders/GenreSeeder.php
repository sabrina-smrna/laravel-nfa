<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Genre;

class GenreSeeder extends Seeder {
    public function run(): void {
        Genre::insert([
            ['name'=>'Fantasy','description'=>'Genre berisi sihir dan dunia imajinasi','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Romance','description'=>'Cinta dan hubungan','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Adventure','description'=>'Petualangan dan aksi','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Horror','description'=>'Membuat bulu kuduk merinding','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Science Fiction','description'=>'Fiksi ilmiah dan teknologi','created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
