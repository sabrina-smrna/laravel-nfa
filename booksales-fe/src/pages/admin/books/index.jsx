import { useEffect, useState } from "react";
import { getBooks } from "../../../_services/books";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);

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

  // console.log(books);

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                type="button"
                className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
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
          </div>

          {/* Tabel */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Cover
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Genre
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Author
                  </th>
                </tr>
              </thead>
              <tbody>
                {books && books.length > 0 ? (
                  books.map((book) => (
                    <tr key={book.id} className="border-b dark:border-gray-700">
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
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-3">
                      Data Tidak Ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
