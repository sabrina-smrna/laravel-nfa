import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook } from "../../../_services/books";
import { getGenres } from "../../../_services/genres";
import { getAuthors } from "../../../_services/authors";

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    cover_photo: "",
    genre_id: "",
    author_id: "",
  });
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const [bookRes, genresRes, authorsRes] = await Promise.all([
          getBookById(id),
          getGenres(),
          getAuthors(),
        ]);

        setForm({
          title: bookRes.title || "",
          description: bookRes.description || "",
          price: bookRes.price || "",
          stock: bookRes.stock || "",
          cover_photo: bookRes.cover_photo || "",
          genre_id: bookRes.genre_id || "",
          author_id: bookRes.author_id || "",
        });

        setGenres(genresRes);
        setAuthors(authorsRes);
      } catch (error) {
        console.error("Gagal memuat data buku:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, form);
      navigate("/admin/books");
    } catch (error) {
      console.error("Gagal mengupdate buku:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* Tombol Back */}
      <div className="w-full max-w-3xl mb-6">
        <button
          onClick={() => navigate("/admin/books")}
          className="flex items-center text-gray-300 hover:text-white transition mb-4"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Edit Book</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-300">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-300">Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Stock</label>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Cover URL</label>
            <input
              type="text"
              name="cover_photo"
              value={form.cover_photo}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
              placeholder="https://example.com/image.jpg"
            />
            {form.cover_photo && (
              <div className="mt-3 flex justify-center">
                <img
                  src={form.cover_photo}
                  alt="Preview"
                  className="w-40 h-56 object-cover rounded-xl border border-gray-700 shadow-md"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Genre</label>
            <select
              name="genre_id"
              value={form.genre_id}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
            >
              <option value="">-- Select Genre --</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Author</label>
            <select
              name="author_id"
              value={form.author_id}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
            >
              <option value="">-- Select Author --</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
