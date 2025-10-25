import API from "../_api";

export const getGenres = async () => {
  const { data } = await API.get("/genres");
  return data;
};

export const createGenre = async (newGenre) => {
  const { data } = await API.post("/genres", newGenre);
  return data;
};

export const updateGenre = async (id, updatedGenre) => {
  const { data } = await API.put(`/genres/${id}`, updatedGenre);
  return data;
};

export const deleteGenre = async (id) => {
  const { data } = await API.delete(`/genres/${id}`);
  return data;
};
