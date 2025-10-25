import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGenres, updateGenre } from "../../../_services/genres";

export default function GenreEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", description: "" });

  useEffect(() => {
    const fetchGenre = async () => {
      const genres = await getGenres();
      const current = genres.find((g) => g.id === parseInt(id));
      if (current) setForm(current);
    };
    fetchGenre();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateGenre(id, form);
    navigate("/admin/genres");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 flex flex-col justify-center items-center p-8 relative">
      <button
        onClick={() => navigate("/admin/genres")}
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
      <div className="w-full max-w-4xl bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl p-8 backdrop-blur-md mt-8">
      
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          ✏️ Edit Genre
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-gray-300 font-semibold mb-3">
              Genre Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter genre name..."
              className="w-full bg-gray-950 text-white border border-gray-700 rounded-xl p-4 text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-3">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter description..."
              className="w-full bg-gray-950 text-white border border-gray-700 rounded-xl p-4 text-lg focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder-gray-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg"
            >
              💾 Update Genre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
