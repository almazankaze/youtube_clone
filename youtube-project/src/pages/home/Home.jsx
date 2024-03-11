import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
