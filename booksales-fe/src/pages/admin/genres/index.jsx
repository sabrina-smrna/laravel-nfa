import { useEffect, useState } from "react";
import { getGenres, deleteGenre } from "../../../_services/genres";
import { Link } from "react-router-dom";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const genresData = await getGenres();
      setGenres(Array.isArray(genresData) ? genresData : genresData.data);
    } catch (error) {
      console.error("Gagal mengambil data genre:", error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Yakin mau hapus genre ini?")) {
      await deleteGenre(id);
      fetchData();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 p-8 text-white">
      <div className="max-w-6xl mx-auto bg-gray-900/80 p-8 rounded-3xl shadow-2xl border border-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-wide">🎵 Genre List</h1>
          <Link
            to="create"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md transition"
          >
            + Add Genre
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300">
            <thead className="bg-gray-800 text-gray-100 uppercase text-sm">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {genres.length > 0 ? (
                genres.map((genre, index) => (
                  <tr
                    key={genre.id}
                    className="border-b border-gray-700 hover:bg-gray-800/60 transition"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-semibold text-white">
                      {genre.name}
                    </td>
                    <td className="py-3 px-4">{genre.description || "-"}</td>
                    <td className="py-3 px-4 text-center space-x-2">
                      <Link
                        to={`edit/${genre.id}`}
                        className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-md font-medium text-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(genre.id)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md font-medium text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-5 text-gray-400">
                    No genres found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
