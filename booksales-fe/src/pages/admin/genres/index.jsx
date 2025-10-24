import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGenres } from "../../../_services/genres";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();
      setGenres(data);
    };
    fetchGenres();
  }, []);

  return (
    <section className="bg-gray-50 py-8 dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Genres
          </h2>
          <Link
            to="/admin/genres/create"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700"
          >
            + Add Genre
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="h-24 flex items-center justify-center bg-indigo-50 dark:bg-indigo-900 rounded-md">
                <span className="text-indigo-700 dark:text-indigo-300 text-xl font-semibold">
                  {genre.name}
                </span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                {genre.description || "No description available."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
