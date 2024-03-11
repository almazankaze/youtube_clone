import PlayVideo from "../../components/playvideo/PlayVideo";
import Recommended from "../../components/recommended/Recommended";
import "./video.scss";

const Video = () => {
  return (
    <div className="play-container">
      <PlayVideo />
      <Recommended />
    </div>
  );
};

export default Video;
