import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchMovies, ORIGINAL_IMAGE_BASE_URL } from "../hooks/useTMDBApi.js";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/MovieCard.jsx";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const {
    data: movie = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["search", query], //This is because we want to identify the data depending on the query
    queryFn: ({ queryKey }) => searchMovies(queryKey[1]),
    enabled: query.length > 1,
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
    <div>
      {query && movie.length === 0 && (
        <p className="text-white">No results found</p>
      )}
      <div>
        <SearchBar setQuery={setQuery} />
      </div>
      <div></div>
    </div>
  );
}
