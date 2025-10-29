<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CustomerMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->user()->role !== 'user') {
            return response()->json(['message' => 'Access denied. Customers only.'], 403);
        }

        return $next($request);
    }
}
