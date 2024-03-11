import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Sub from "../../assets/sub.jpg";

import "./sidebar.scss";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <div className="side-link-icon">
            <HomeIcon />
          </div>
          <p>Home</p>
        </div>
        <div className="side-link">
          <div className="side-link-icon">
            <SportsEsportsOutlinedIcon />
          </div>
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <div className="side-link-icon">
            <DirectionsCarFilledOutlinedIcon />
          </div>
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <div className="side-link-icon">
            <SportsFootballOutlinedIcon />
          </div>
          <p>Sports</p>
        </div>
        <div className="side-link">
          <div className="side-link-icon">
            <MusicNoteOutlinedIcon />
          </div>
          <p>Music</p>
        </div>
        <div className="side-link">
          <div className="side-link-icon">
            <FeedOutlinedIcon />
          </div>
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={Sub} />
          <p>0Kazekun0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
