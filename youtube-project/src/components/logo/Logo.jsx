import logo from "../../assets/logo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} />
      <h3>VidTube</h3>
    </div>
  );
};

export default Logo;
