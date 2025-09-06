import { useQuery } from "@tanstack/react-query";
import fetchTrending from "../hooks/useTMDBApi";
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
      <div>{heroMovies && <p>{heroMovies.title}</p>}</div>
    </>
  );
}
