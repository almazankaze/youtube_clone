import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Sub from "../../assets/sub.jpg";

import "./sidebar.scss";

const Sidebar = () => {
  return <div className="sidebar>
  <div className="shortcut-links">
  <div className="side-link">
  <p>Home</p>
  </div>
    <div className="side-link">
  <p>Home</p>
  </div>
    <div className="side-link">
  <p>Gaming</p>
  </div>
    <div className="side-link">
  <p>Automobiles</p>
  </div>
    <div className="side-link">
  <p>Sports</p>
  </div>
    <div className="side-link">
  <p>Music</p>
  </div>
    <div className="side-link">
  <p>News</p>
  </div>
    <hr />
    
  </div>
    <div className="subscribed-list">
    <h3>Subscribed</h3>
    <div className="side-link">
  <p>0Kazekun0</p>
  </div>
  </div>
  </div>;
};

export default Sidebar;
