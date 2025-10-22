<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        // Jika belum login
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Jika bukan admin
        if (!$user->is_admin) {
            return response()->json(['error' => 'Forbidden - Admin only'], 403);
        }

        // Jika admin, lanjut ke controller
        return $next($request);
    }
}
