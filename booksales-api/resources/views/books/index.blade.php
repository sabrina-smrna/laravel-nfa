<!DOCTYPE html>
<html>
<head>
    <title>Books Collection</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: #f5f6fa;
        }
        .card {
            border-radius: 15px;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .badge-genre {
            font-size: 0.8rem;
            padding: 0.4em 0.6em;
            border-radius: 12px;
            color: white;
        }
        .Fantasy { background: #6f42c1; }
        .Romance { background: #e83e8c; }
        .Adventure { background: #fd7e14; }
        .History { background: #20c997; }
        .Science { background: #0d6efd; }
    </style>
</head>
<body class="p-4">

    <h2 class="mb-4 text-center">📚 Books Collection</h2>

    <div class="row g-4">
        @foreach($books as $book)
        <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title fw-bold">{{ $book->title }}</h5>
                    <p class="mb-2">
                        <span class="badge badge-genre {{ $book->genre }}">{{ $book->genre }}</span>
                    </p>
                    <p class="mb-1"><strong>Author:</strong> {{ $book->author->name }}</p>
                    <p class="mb-0"><strong>Year:</strong> {{ $book->published_year }}</p>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="text-center mt-4">
        <a href="{{ route('authors.index') }}" class="btn btn-primary btn-lg">View Authors</a>
    </div>

</body>
</html>
