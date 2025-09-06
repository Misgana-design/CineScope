import axios from "axios";

export default async function fetchTrending() {
  const API_Key = import.meta.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const response = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_Key}`
  );
  console.log(response.data.results);
}
fetchTrending()