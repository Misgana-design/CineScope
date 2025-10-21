import { IMAGE_BASE_URL } from "../hooks/useTMDBApi";

export default function TvCard({ tvSeries }) {
  <>
    <div>
      {console.log(tvSeries.poster_path)}{" "}
      <img src={IMAGE_BASE_URL + tvSeries.poster_path} alt={tvSeries.title} />
    </div>
  </>;
}
