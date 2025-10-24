import API from "../_api";

export const getGenres = async () => {
  const { data } = await API.get("/genres");
  return data;
};

export const createGenre = async (newGenre) => {
  const { data } = await API.post("/genres", newGenre);
  return data;
};
