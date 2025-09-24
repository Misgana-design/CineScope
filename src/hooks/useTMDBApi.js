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
    return (
      res.data.results || []
    ); /*The line of code return res.data.results || []; is a JavaScript expression that performs the following actions:

Accessing Data: res.data.results is likely accessing a property called results from an object called data, which is itself a property of an object called res. This suggests that res is likely a response from an API or some data source.

Returning the Value: The return keyword indicates that this line is part of a function, and it will return the value that follows it.

Logical OR Operator (||): The || operator is a logical OR operator. It works as follows: if the value on the left (res.data.results) is a "truthy" value (meaning it exists and is not null, undefined, false, or an empty string or array), then that value will be returned. If res.data.results is "falsy" (meaning it is null, undefined, or any other falsy value), then the empty array [] will be returned instead.


In summary, this line of code is effectively saying: "Return the results from the response data if it exists; otherwise, return an empty array." This is a common practice in programming to ensure that the function has a valid return value that can be safely used later in the code, even if there are no results. */
  } catch (error) {
    console.error("Error occurred", error);
    throw error; // Important: re-throw the error for React Query to catch
  }
}
