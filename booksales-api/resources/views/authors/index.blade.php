<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authors</title>
    <link rel="stylesheet" href="{{ asset('css/author.css') }}">
</head>
<body>
    <div class="container">
        <h1 class="title">Famous Authors</h1>
        <div class="card-container">
            @foreach($authors as $author)
                <div class="card">
                    <div class="card-header">{{ $author['name'] }}</div>
                    <div class="card-body">
                        <p><strong>Nationality:</strong> {{ $author['nationality'] }}</p>
                        <p>{{ $author['biography'] }}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</body>
</html>
