import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthor } from "../../../_services/authors";

export default function AuthorCreate() {
  const [form, setForm] = useState({ name: "", bio: "", photo: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAuthor(form);
      alert("Author berhasil ditambahkan!");
      navigate("/admin/authors");
    } catch (error) {
      console.error("Gagal menambah author:", error);
      alert("Terjadi kesalahan saat menambah data.");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Tambah Author
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="border rounded-lg p-2.5 w-full"
                placeholder="Masukkan nama author"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows="3"
                className="border rounded-lg p-2.5 w-full"
                placeholder="Masukkan deskripsi singkat"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Photo URL</label>
              <input
                type="text"
                name="photo"
                value={form.photo}
                onChange={handleChange}
                className="border rounded-lg p-2.5 w-full"
                placeholder="Masukkan URL foto"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 text-white bg-indigo-700 hover:bg-indigo-800 px-5 py-2.5 rounded-lg"
          >
            Simpan
          </button>
        </form>
      </div>
    </section>
  );
}
