import { useEffect, useState } from "react";
import { getAuthors, deleteAuthor } from "../../../_services/authors";
import { Link } from "react-router-dom";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const authorsData = await getAuthors();
      setAuthors(Array.isArray(authorsData) ? authorsData : authorsData.data);
    } catch (error) {
      console.error("Gagal mengambil data author:", error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus author ini?")) {
      try {
        await deleteAuthor(id);
        alert("Author berhasil dihapus.");
        fetchAuthors();
      } catch (error) {
        console.error("Gagal menghapus author:", error);
      }
    }
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-indigo-400">Author List</h2>
        <Link
          to="create"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
        >
          + Add Author
        </Link>
      </div>

      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="bg-gray-700 text-gray-200 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Bio</th>
              <th className="px-6 py-3">Photo</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.length > 0 ? (
              authors.map((author, index) => (
                <tr
                  key={author.id}
                  className="border-b border-gray-700 hover:bg-gray-700/50"
                >
                  <td className="px-6 py-3">{index + 1}</td>
                  <td className="px-6 py-3">{author.name}</td>
                  <td className="px-6 py-3">{author.bio || "-"}</td>
                  <td className="px-6 py-3">
                    {author.photo ? (
                      <img
                        src={author.photo}
                        alt={author.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-gray-500">No Image</span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-right space-x-3">
                    <Link
                      to={`edit/${author.id}`}
                      className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(author.id)}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  Data tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
