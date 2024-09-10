import VideoCard from "./VideoCard";
import movieData from "../data/movieData.json";

const VideoSlider = () => {
  return (
    <div className="video-slider-container">
      {movieData.map((movie) => {
        return (
          <div className="slider-parent">
            <div className="genre-title">{movie.genre}</div>
            <div className="slider-scroll">
              <VideoCard
                id={movie.id}
                list={movie.movies}
              />{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoSlider;
