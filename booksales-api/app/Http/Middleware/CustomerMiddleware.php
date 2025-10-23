<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CustomerMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->check() || auth()->user()->is_admin !== 0) {
            return response()->json([
                'success' => false,
                'message' => 'Access denied. Customer only.'
            ], 403);
        }

        return $next($request);
    }
}
