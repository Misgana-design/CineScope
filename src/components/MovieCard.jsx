// src/components/MovieCard.jsx
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../hooks/useTMDBApi";
import { useFavorites } from "../context/FavoritesContext";

/**
 * MovieCard shows poster, title, rating and a favorite toggle button.
 * Clicking card navigates to /movie/:id (Link). Clicking heart toggles favorite without navigation.
 */
export default function MovieCard({ movie }) {
  const { id, title, poster_path, vote_average } = movie;
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(id);

  const handleFavClick = (e) => {
    e.preventDefault(); // stop Link navigation
    e.stopPropagation(); // stop event bubbling
    toggleFavorite(movie);
  };

  return (
    <Link
      to={`/movie/${id}`}
      className="group relative block bg-neutral-900 rounded-xl overflow-hidden shadow hover:scale-105 transition transform"
    >
      <img
        src={
          poster_path ? `${IMAGE_BASE_URL}${poster_path}` : "/placeholder.jpg"
        }
        alt={title}
        className="w-full h-72 object-cover"
      />

      {/* Favorite button (top-right) */}
      <button
        onClick={handleFavClick}
        aria-label={fav ? "Remove from favorites" : "Add to favorites"}
        className={`absolute top-3 right-3 p-2 rounded-full text-white focus:outline-none ${
          fav ? "bg-red-600" : "bg-black/40"
        }`}
        title={fav ? "Remove from favorites" : "Add to favorites"}
      >
        {/* A simple heart; you can swap with Heroicons */}
        {fav ? "♥" : "♡"}
      </button>

      <div className="p-3 text-white">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-sm opacity-70">
          ⭐ {vote_average ? vote_average.toFixed(1) : "—"}
        </p>
      </div>
    </Link>
  );
}