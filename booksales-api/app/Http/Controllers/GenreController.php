<?php
namespace App\Http\Controllers;
use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index(){ return response()->json(Genre::all()); }

    public function show($id){
        $g = Genre::find($id);
        if(!$g) return response()->json(['error'=>'Genre not found'],404);
        return response()->json($g);
    }

    public function store(Request $r){
        $v = $r->validate(['name'=>'required|string','description'=>'nullable|string']);
        $g = Genre::create($v);
        return response()->json(['message'=>'Genre created','data'=>$g],201);
    }

    public function update(Request $r,$id){
        $g = Genre::find($id);
        if(!$g) return response()->json(['error'=>'Genre not found'],404);
        $v = $r->validate(['name'=>'sometimes|required|string','description'=>'nullable|string']);
        $g->update($v);
        return response()->json(['message'=>'Genre updated','data'=>$g]);
    }

    public function destroy($id){
        $g = Genre::find($id);
        if(!$g) return response()->json(['error'=>'Genre not found'],404);
        $g->delete();
        return response()->json(['message'=>'Genre deleted']);
    }
}
