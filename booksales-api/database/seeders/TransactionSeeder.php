<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Book;

class TransactionSeeder extends Seeder {
    public function run(): void {
        $u = User::where('is_admin',false)->first();
        $b = Book::first();
        if(!$u || !$b) return;
        Transaction::insert([
            ['order_number'=>'ORD-'.strtoupper(uniqid()),'customer_id'=>$u->id,'book_id'=>$b->id,'total_amount'=>$b->price,'created_at'=>now(),'updated_at'=>now()],
            ['order_number'=>'ORD-'.strtoupper(uniqid()),'customer_id'=>$u->id,'book_id'=>2,'total_amount'=>150000,'created_at'=>now(),'updated_at'=>now()],
            ['order_number'=>'ORD-'.strtoupper(uniqid()),'customer_id'=>$u->id,'book_id'=>3,'total_amount'=>90000,'created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
