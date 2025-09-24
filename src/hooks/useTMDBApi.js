import axios from "axios";

const API_KEY = "f5d9908a0cd5041151ce52978766bfea";
const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const ORIGINAL_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export async function fetchTrending() {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    return res.data.results;
  } catch (error) {
    console.error("Error ocurred", error);
  }
}

export async function searchMovies(query) {
  try {
    const res = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    return res.data.results || []; // Returns the first element it it is truthy and returns the second element if the first element is falsy
  } catch (error) {
    console.error("Error occurred", error);
    throw error; // Important: re-throw the error for React Query to catch
  }
}
