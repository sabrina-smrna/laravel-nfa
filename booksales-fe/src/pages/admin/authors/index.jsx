import { useEffect, useState } from "react";
import { getAuthors } from "../../../_services/authors";
import { Link } from "react-router-dom";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorsData = await getAuthors();
        setAuthors(Array.isArray(authorsData) ? authorsData : authorsData.data);
      } catch (error) {
        console.error("Gagal mengambil data author:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            Author List
          </h2>
          <Link
            to="create"
            className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            + Add Author
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Bio</th>
                <th className="px-4 py-3">Photo</th>
              </tr>
            </thead>
            <tbody>
              {authors && authors.length > 0 ? (
                authors.map((author, index) => (
                  <tr key={author.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                      {author.name}
                    </td>
                    <td className="px-4 py-3">{author.bio || "-"}</td>
                    <td className="px-4 py-3">
                      {author.photo ? (
                        <img
                          src={author.photo}
                          alt={author.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-3">
                    Data Tidak Ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
