<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder {
    public function run(): void {
        User::factory()->create([
            'name'=>'Admin User',
            'email'=>'admin@example.com',
            'password'=>bcrypt('password'),
            'is_admin'=>true
        ]);

        User::factory()->create([
            'name'=>'Customer One',
            'email'=>'user1@example.com',
            'password'=>bcrypt('password'),
            'is_admin'=>false
        ]);

        User::factory()->create([
            'name'=>'Customer Two',
            'email'=>'user2@example.com',
            'password'=>bcrypt('password'),
            'is_admin'=>false
        ]);
    }
}
