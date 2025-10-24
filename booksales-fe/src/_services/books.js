import API from "../_api";

export const getBooks = async () => {
  const { data } = await API.get("/books");
  return data;
};
