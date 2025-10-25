import API from "../_api";

export const getBooks = async () => {
  const { data } = await API.get("/books");
  return data;
};

export const getBookById = async (id) => {
  const { data } = await API.get(`/books/${id}`);
  return data;
};

export const createBook = async (newBook) => {
  const { data } = await API.post("/books", newBook);
  return data;
};

export const updateBook = async (id, updatedBook) => {
  const { data } = await API.put(`/books/${id}`, updatedBook);
  return data;
};

export const deleteBook = async (id) => {
  await API.delete(`/books/${id}`);
};
