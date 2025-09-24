import axios from "axios";

const API_KEY = "f5d9908a0cd5041151ce52978766bfea";
const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // good for posters
export const ORIGINAL_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"; // good for hero banners

export async function fetchTrending() {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    return res.data.results || []; //If the data is not found return an empty array to make handling easy later
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
    return res.data.results;
  } catch (error) {
    console.error("Error occured", error);
    throw error; //Rethrow error for react query
  }
}
