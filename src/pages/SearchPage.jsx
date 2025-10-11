import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchMovies, ORIGINAL_IMAGE_BASE_URL } from "../hooks/useTMDBApi.js";
import SearchBar from "../components/SearchBar.jsx";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const {
    data: movie = [],
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
  const movieResult = movie[0];
  const movieResults = movie.slice(1);

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
        {query && movie.length === 0 && (
          <p className="text-center mt-6 text-9xl text-white">
            No results found
          </p>
        )}
        <div>
          {movie.length > 0 && (
            <p
              className=""
              style={{
                backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${movieResults.poster_path})`,
                backgroundSize: "cover",
                width: "100px",
                height: "100px",
              }}
            ></p>
          )}
        </div>
      </div>
    </>
  );
}
