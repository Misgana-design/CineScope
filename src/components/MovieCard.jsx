import { IMAGE_BASE_URL } from "../hooks/useTMDBApi";

export function MovieCard({ movie }) {
  return (
    <>
      <div>
        <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
      </div>
    </>
  );
}

export function TvCard({ tvSeries }) {
  <>
    <div>
      <img src={IMAGE_BASE_URL + tvSeries.poster_path} alt={tvSeries.title} />
    </div>
  </>;
}
