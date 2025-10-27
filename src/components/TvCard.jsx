import { IMAGE_BASE_URL } from "../hooks/useTMDBApi";

export default function TvCard({ series }) {
  return (
    <>
      <div>
        <img src={IMAGE_BASE_URL + series.poster_path} alt={series.title} />
      </div>
    </>
  );
}
