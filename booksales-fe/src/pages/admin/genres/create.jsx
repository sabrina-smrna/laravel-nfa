import { useState } from "react";
import { createGenre } from "../../../_services/genres";
import { useNavigate } from "react-router-dom";

export default function GenreCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createGenre({ name, description });
      navigate("/admin/genres");
    } catch (error) {
      console.error("Gagal menambahkan genre:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-5">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Tambah Genre
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Nama Genre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Masukkan nama genre"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Deskripsi
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Masukkan deskripsi (opsional)"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Simpan
          </button>
        </form>
      </div>
    </section>
  );
}
