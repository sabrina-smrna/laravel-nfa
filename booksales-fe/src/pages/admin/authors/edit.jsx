// src/pages/admin/authors/Edit.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthors, updateAuthor } from "../../../_services/authors";

export default function AuthorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState({ name: "", bio: "", image: "" });

  useEffect(() => {
    const fetchData = async () => {
      const authors = await getAuthors();
      const current = authors.find((a) => a.id === parseInt(id));
      if (current) setAuthor(current);
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAuthor(id, author);
      navigate("/admin/authors");
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan data. Pastikan URL gambar valid dan server menerima field image.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-950 flex flex-col justify-center items-center px-6 py-12 relative">
      <button
        onClick={() => navigate("/admin/authors")}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-300 hover:text-white bg-gray-800/60 hover:bg-gray-700 px-4 py-2 rounded-xl transition-all duration-300 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <div className="w-full max-w-4xl bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl p-10 backdrop-blur-md mt-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-10 tracking-wide">
          ✏️ Edit Author
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label className="block text-gray-300 font-semibold mb-3">Name</label>
            <input
              type="text"
              name="name"
              value={author.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-950 text-white border border-gray-700 rounded-xl p-4 text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder-gray-500"
              placeholder="Enter author name..."
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-gray-300 font-semibold mb-3">Bio</label>
            <textarea
              name="bio"
              value={author.bio}
              onChange={handleChange}
              rows="5"
              className="w-full bg-gray-950 text-white border border-gray-700 rounded-xl p-4 text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder-gray-500"
              placeholder="Enter short biography..."
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-300 font-semibold mb-3">Image URL</label>
            <input
              type="text"
              name="image"
              value={author.image}
              onChange={handleChange}
              className="w-full bg-gray-950 text-white border border-gray-700 rounded-xl p-4 text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder-gray-500"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          {/* Preview */}
          {author.image && (
            <div className="flex justify-center mt-8">
              <img
                src={author.image}
                alt="Preview"
                className="w-52 h-52 object-cover rounded-2xl shadow-lg border-4 border-gray-800 hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 text-lg shadow-lg"
            >
              💾 Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
