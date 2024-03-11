import { useState, useEffect, Fragment } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Logo from "../logo/Logo";

import "./navigation.scss";

const Navigation = ({ setSidebar }) => {
  return (
    <Fragment>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-left">
            <div
              className="nav-icon nav-menu"
              onClick={() => setSidebar((prev) => !prev)}
            >
              <MenuIcon />
            </div>
            <Logo />
          </div>
          <div className="navbar-middle">
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <div className="search-icon">
                <SearchOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="navbar-right">
            <div className="nav-icon">
              <VideoCallOutlinedIcon />
            </div>
            <div className="nav-icon">
              <NotificationsNoneOutlinedIcon />
            </div>
            <div className="nav-icon">
              <AccountCircleOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
