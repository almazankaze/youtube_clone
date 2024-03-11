import { Link } from "react-router-dom";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/4521`} className="card">
        <img src="" alt="" />
        <h2>Best channel to learn coding</h2>
        <h3>GreatStack</h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>
      <div className="card">
        <img src="" alt="" />
        <h2>Best channel to learn coding</h2>
        <h3>GreatStack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src="" alt="" />
        <h2>Best channel to learn coding</h2>
        <h3>GreatStack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src="" alt="" />
        <h2>Best channel to learn coding</h2>
        <h3>GreatStack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src="" alt="" />
        <h2>Best channel to learn coding</h2>
        <h3>GreatStack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src="" alt="" />
        <h2>Best channel to learn coding</h2>
        <h3>GreatStack</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
    </div>
  );
};

export default Feed;
