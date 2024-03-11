import { Link } from "react-router-dom";
import "./recommended.scss";

const Recommended = () => {
  return (
    <div className="recommended">
      <Link to={`video/20/4521`} className="side-video-list">
        <img src="" alt="" />
        <div className="video-info">
          <h4>Best channel to learn coding</h4>
          <p>GreatStack</p>
          <p>15k views</p>
        </div>
      </Link>
      <Link to={`video/20/4521`} className="side-video-list">
        <img src="" alt="" />
        <div className="video-info">
          <h4>Best channel to learn coding</h4>
          <p>GreatStack</p>
          <p>15k views</p>
        </div>
      </Link>
      <Link to={`video/20/4521`} className="side-video-list">
        <img src="" alt="" />
        <div className="video-info">
          <h4>Best channel to learn coding</h4>
          <p>GreatStack</p>
          <p>15k views</p>
        </div>
      </Link>
    </div>
  );
};

export default Recommended;
