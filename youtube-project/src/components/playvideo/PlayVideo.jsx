import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import Sub from "../../assets/sub.jpg";

import "./playvideo.scss";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={""} controls autoPlay />
      <h3>Best Youtube Channel</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <ThumbUpIcon /> 125
          </span>
          <span>
            <ThumbDownIcon /> 12
          </span>
          <span>
            <LabelImportantIcon /> Share
          </span>
          <span>
            <FavoriteIcon /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={Sub} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum
          id laboriosam? Sint doloribus sequi nobis temporibus ipsam! Ad,
          officia vero. Doloremque fuga, iusto ducimus exercitationem
          perferendis vel accusantium dolorum.
        </p>
        <p>Subcribe GreatStack to watch more tutorials</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={Sub} alt="" />
          <div>
            <h3>
              0KazeKun0 <span>1 day ago</span>
            </h3>
            <p>Great Video</p>
            <div className="comment-action">
              <ThumbUpIcon />
              <span>244</span>
              <ThumbDownIcon />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={Sub} alt="" />
          <div>
            <h3>
              0KazeKun0 <span>1 day ago</span>
            </h3>
            <p>Great Video</p>
            <div className="comment-action">
              <ThumbUpIcon />
              <span>244</span>
              <ThumbDownIcon />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={Sub} alt="" />
          <div>
            <h3>
              0KazeKun0 <span>1 day ago</span>
            </h3>
            <p>Great Video</p>
            <div className="comment-action">
              <ThumbUpIcon />
              <span>244</span>
              <ThumbDownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
