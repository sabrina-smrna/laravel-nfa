<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genre List</title>
    <link rel="stylesheet" href="{{ asset('css/genre.css') }}">
</head>
<body>
    <h1 class="page-title">📚 Book Genres</h1>
    
    <div class="card-container">
        @foreach ($genres as $genre)
        <div class="card">
            <img src="{{ $genre['image'] }}" alt="{{ $genre['name'] }}">
            <div class="card-content">
                <h2>{{ $genre['name'] }}</h2>
                <p>{{ $genre['description'] }}</p>
            </div>
        </div>
        @endforeach
    </div>
</body>
</html> -->
