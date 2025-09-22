import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import searchMovies from "../hooks/useTMDBApi.js";

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
}
