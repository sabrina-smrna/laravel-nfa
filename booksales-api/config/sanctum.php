<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Stateful Domains
    |--------------------------------------------------------------------------
    |
    | Domain-domain yang akan dianggap stateful oleh Sanctum. Cookie-based
    | authentication hanya akan berfungsi pada domain-domain ini.
    | Pisahkan dengan koma jika lebih dari satu domain.
    |
    */

    'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost,127.0.0.1')),

    /*
    |--------------------------------------------------------------------------
    | Sanctum Guards
    |--------------------------------------------------------------------------
    |
    | Daftar guard yang digunakan untuk autentikasi API. Biasanya hanya 'web'.
    |
    */

    'guard' => ['web'],

    /*
    |--------------------------------------------------------------------------
    | Expiration Minutes
    |--------------------------------------------------------------------------
    |
    | Waktu kedaluwarsa token cookie. Jika null, token tidak akan kedaluwarsa.
    |
    */

    'expiration' => null,

    /*
    |--------------------------------------------------------------------------
    | Middleware
    |--------------------------------------------------------------------------
    |
    | Middleware yang digunakan untuk memproses request Sanctum.
    |
    */

    'middleware' => [
        'verify_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
        'ensure_front_cookie' => Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    ],

];
