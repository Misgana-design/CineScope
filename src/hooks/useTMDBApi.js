import axios from "axios";

const API_KEY = "f5d9908a0cd5041151ce52978766bfea";
const BASE_URL = "https://api.themoviedb.org/3";

export default function fetchTrending() {
  axios
    .get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then((res) => {
      return res.data.results;
    })
    .catch((error) => {
      return "Error occurred", error;
    });
}
