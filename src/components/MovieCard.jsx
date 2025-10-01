import { IMAGE_BASE_URL } from "../hooks/useTMDBApi";

export default function MovieCard({ movie }) {
  return (
    <>
      <div>
        <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
      </div>
    </>
  );
}
