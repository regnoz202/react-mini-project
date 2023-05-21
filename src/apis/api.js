import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = import.meta.env.VITE_BASE_URL

export const getMovie = async () => {
  const film = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  )
  return film.data.results;
};
export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  )
  return search.data;
};