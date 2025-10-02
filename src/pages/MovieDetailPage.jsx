// src/pages/MovieDetailPage.jsx
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from "../api/useTMDBApi";
import { useFavorites } from "../context/FavoritesContext";

export default function MovieDetailPage() {
  const { id } = useParams();
  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovie(id),
    enabled: !!id,
  });

  const { isFavorite, toggleFavorite } = useFavorites();

  if (isLoading) return <p className="p-6 text-gray-400">Loading...</p>;
  if (!movie) return <p className="p-6 text-red-500">Movie not found</p>;

  const fav = isFavorite(movie.id);

  return (
    <div className="p-6 text-white">
      <div className="flex gap-6">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/placeholder.jpg"
          }
          alt={movie.title}
          className="w-48 rounded"
        />
        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="mt-2 text-gray-300">{movie.overview}</p>

          <button
            onClick={() => toggleFavorite(movie)}
            className={`mt-4 px-4 py-2 rounded ${
              fav ? "bg-red-600 text-white" : "bg-blue-600 text-white"
            }`}
          >
            {fav ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
