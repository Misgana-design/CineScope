import { useQuery } from "@tanstack/react-query";
import { fetchTrending, ORIGINAL_IMAGE_BASE_URL } from "../hooks/useTMDBApi";
import MovieCard from "../components/MovieCard";
import Footer from "../layout/Footer";

export default function HomePage() {
  const {
    data: movie = [],
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["Trending-movies"],
    queryFn: fetchTrending,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
    retry: 3,
  });

  if (isLoading)
    return <p className="mt-30 text-white text-center text-2xl">Loading...</p>;
  if (error)
    return (
      <p className="mt-30 text-red-500 text-center text-2xl">
        Something went wrong
      </p>
    );
  const heroMovies = movie[0];
  const restMovies = movie;

  return (
    <>
      {isFetching && <p>Background refreshing</p>}
      <div className="mt-6">
        {heroMovies && (
          <>
            <div className="flex justify-between items-center ">
              <div
                style={{
                  backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${heroMovies.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  maxHeight: "500px",
                }}
                className="shadow-2xl shadow-gray-700 ml-28 object-cover"
              ></div>
              <div className="p-28">
                <p className="bg-linear-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-7xl font-extrabold">
                  {heroMovies.title}
                </p>
                <p className="text-white w-100 mt-4 font-mono">
                  {heroMovies.overview}
                </p>
                <button className="bg-green-400  cursor-pointer w-30 h-10 text-lg font-bold rounded-lg mt-4 border-solid border-2 border-green-400 hover:bg-black hover:text-white">
                  Watch now
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="text-white font-extrabold text-4xl ml-28 mt-12">
        Trending This Week
        <div className="grid grid-cols-5 gap-6 w-250 mt-5 aspect-video">
          {restMovies.map((restMovie) => (
            <MovieCard key={restMovie.id} movie={restMovie} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
