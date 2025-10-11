import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  searchMovies,
  ORIGINAL_IMAGE_BASE_URL,
  IMAGE_BASE_URL,
} from "../hooks/useTMDBApi.js";
import SearchBar from "../components/SearchBar.jsx";
import Footer from "../layout/Footer.jsx";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const {
    data: movies = [],
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["search", query], //This is because we want to identify the data depending on the query
    queryFn: ({ queryKey }) => searchMovies(queryKey[1]),
    enabled: query.length > 1, //This is to make it sure that the data should be fetched only when the length of query in the input is greater than 1. By default the query is enabled and fetch automatically.
    refetchOnWindowFocus: true, //This is to refech the data in window focus when the data is stale
    staleTime: 1000 * 60, //This is stale time
  });

  if (isLoading)
    return <p className="mt-30 text-white text-center text-2xl">Loading...</p>;
  if (error)
    return (
      <p className="mt-30 text-red-500 text-center text-2xl">
        Something went wrong: {error.message}
      </p>
    );
  return (
    <>
      {isFetching && <p>Background refreshing</p>}
      <div>
        <div>
          <SearchBar setQuery={setQuery} />
        </div>
        {query && movies.length === 0 && (
          <p className="text-center mt-6 text-9xl text-white">
            No results found
          </p>
        )}
        <p className="text-center text-4xl mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-extrabold">
          Your results for the movie {query}
        </p>
        <div className="grid grid-cols-5 gap-6 w-250 ml-28 mt-15">
          {movies.length > 0 &&
            movies
              .filter(
                (movie) =>
                  movie &&
                  movie.id &&
                  (movie.poster_path || movie.backdrop_path)
              )
              .map((movie) => (
                <p
                  style={{
                    backgroundImage: `url(${IMAGE_BASE_URL}${
                      movie.poster_path || movie.backdrop_path
                    })`,
                    backgroundSize: "cover",
                    width: "full",
                    height: "250px",
                  }}
                  className="hover:scale-110 duration-150"
                ></p>
              ))}
        </div>
      </div>
      <div className="font-extrabold">
        <Footer />
      </div>
    </>
  );
}
