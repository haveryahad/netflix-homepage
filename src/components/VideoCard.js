const VideoCard = ({ list }) => {
  return (
    <div className="card-container">
      {list.map((movie) => {
        return (
          <div className="card-parent">
            <div className="video-preview"></div>
            <div className="video-title">{movie.title}</div>
          </div>
        );
      })}
    </div>
  );
};
export default VideoCard;
