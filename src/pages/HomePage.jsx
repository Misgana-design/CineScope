import { useQuery } from "@tanstack/react-query";

import { fetchTrending, ORIGINAL_IMAGE_BASE_URL } from "../hooks/useTMDBApi"; // good for hero banners

export default function HomePage() {
  const {
    data: movie = [],
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchTrending,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
    retry: 3,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  const heroMovies = movie[0];
  const restMovies = movie.slice(1);
  return (
    <>
      {isFetching && <p>Background refreshing</p>}
      <div>
        {heroMovies && <p>{heroMovies.title}</p>}
        <div
          style={{
            backgroundImage: `url(${ORIGINAL_IMAGE_BASE_URL}${heroMovies.backdrop_path})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
}
