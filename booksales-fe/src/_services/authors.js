import API from "../_api";

export const getAuthors = async () => {
  const { data } = await API.get("/authors");
  return data;
};

export const getAuthorsById = async (id) => {
  const { data } = await API.get(`/authors/${id}`);
  return data;
};

export const createAuthor = async (newAuthor) => {
  const { data } = await API.post("/authors", newAuthor);
  return data;
};

export const updateAuthor = async (id, updatedAuthor) => {
  const { data } = await API.put(`/authors/${id}`, updatedAuthor);
  return data;
};

export const deleteAuthor = async (id) => {
  await API.delete(`/authors/${id}`);
};
