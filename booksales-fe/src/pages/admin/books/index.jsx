import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../../../_services/books";
import { useNavigate } from "react-router-dom";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getBooks();
        setBooks(Array.isArray(booksData) ? booksData : booksData.data);
      } catch (error) {
        console.error("Gagal mengambil data buku:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((b) => b.id !== id));
      setDeleteTarget(null);
    } catch (error) {
      console.error("Gagal menghapus buku:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 min-h-screen">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 md:mb-0">
            Books Management
          </h2>
          <button
            onClick={() => navigate("/admin/books/create")}
            className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            <svg
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Add Book
          </button>
        </div>

        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Cover</th>
                <th className="px-4 py-3">Genre</th>
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books && books.length > 0 ? (
                books.map((book) => (
                  <tr
                    key={book.id}
                    className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                      {book.title}
                    </td>
                    <td className="px-4 py-3">{book.description || "-"}</td>
                    <td className="px-4 py-3">
                      Rp {Number(book.price).toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3">{book.stock}</td>
                    <td className="px-4 py-3">
                      {book.cover_photo ? (
                        <img
                          src={book.cover_photo}
                          alt={book.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {book.genre?.name || book.genre_id}
                    </td>
                    <td className="px-4 py-3">
                      {book.author?.name || book.author_id}
                    </td>
                    <td className="px-4 py-3 flex justify-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/books/edit/${book.id}`)}
                        className="bg-yellow-600 hover:bg-yellow-700 px-3 py-2 rounded-lg text-white"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => setDeleteTarget(book)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-3">
                    Data Tidak Ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Delete */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-96 text-center">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Hapus buku ini?
            </h3>
            <p className="text-gray-400 mb-6">{deleteTarget.title}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleDelete(deleteTarget.id)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white"
              >
                Hapus
              </button>
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
