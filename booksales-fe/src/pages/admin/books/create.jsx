import { useState } from "react";
import { createBook } from "../../../_services/books";
import { useNavigate } from "react-router-dom";

export default function CreateBook() {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBook(form);
      alert("Book added successfully!");
      navigate("/admin/books");
    } catch (error) {
      console.error("Failed to add book:", error);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-xl relative">
        <button
          onClick={() => navigate("/admin/books")}
          className="absolute top-4 left-4 text-gray-400 hover:text-white"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold text-center mb-6">Add New Book</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full bg-gray-700 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full bg-gray-700 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Stock</label>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="w-full bg-gray-700 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Cover URL</label>
            <input
              type="text"
              name="cover_photo"
              value={form.cover_photo}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full bg-gray-700 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Genre ID</label>
              <input
                type="number"
                name="genre_id"
                value={form.genre_id}
                onChange={handleChange}
                className="w-full bg-gray-700 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Author ID</label>
              <input
                type="number"
                name="author_id"
                value={form.author_id}
                onChange={handleChange}
                className="w-full bg-gray-700 rounded-lg p-2 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all p-3 rounded-lg font-semibold"
          >
            Add Book
          </button>
        </form>
      </div>
    </section>
  );
}
