import { useFavorites } from "../context/FavoritesContext";
import { IMAGE_BASE_URL } from "../hooks/useTMDBApi";
import Footer from "../layout/Footer";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  if (favorites.length === 0)
    return (
      <p className="m-60 font-bold text-5xl text-center bg-linear-to-r from-blue-500 from-40% to-green-500 to-60% text-transparent bg-clip-text">
        😔 "No favorites yet. Start adding some!"
      </p>
    );
  return (
    <>
      <h1 className="m-25 font-bold text-5xl text-center bg-linear-to-r from-blue-500 from-40% to-green-500 to-60% text-transparent bg-clip-text">
        Your Favorites
      </h1>
      <div className="grid grid-cols-5 gap-7 mt-25 px-10">
        {favorites.map((favorite) => (
          <div className="">
            <img
              className="rounded-4xl"
              src={IMAGE_BASE_URL + favorite.poster_path}
              alt={favorite.title}
            />
            <button>Remove from favorites</button>
          </div>
        ))}
      </div>
      <div className="font-extrabold">
        <Footer />
      </div>
    </>
  );
}
