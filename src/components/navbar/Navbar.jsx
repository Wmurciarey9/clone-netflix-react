import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoveUpOutlinedIcon from "@mui/icons-material/MoveUpOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
          <span>Browse by Languages</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Kids</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>
                <img
                  className="profilesSpan"
                  src="https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg"
                  alt=""
                />
                Profile 1
              </span>
              <span>
                <img
                  className="profilesSpan"
                  src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/50e8272e1fac95db8aa33e34_rw_600.png?h=5c620938ca992743e815e0c3629f52d9"
                  alt=""
                />
                Profile 2
              </span>
              <span>
                <img
                  className="profilesSpan"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
                  alt=""
                />
                Profile 3
              </span>

              <span>
                <EditOutlinedIcon className="iconSpan" />
                Manage Profiles
              </span>
              <span>
                <MoveUpOutlinedIcon className="iconSpan" />
                Transfer Profile
              </span>
              <span>
                <Person2OutlinedIcon className="iconSpan" />
                Account
              </span>
              <span>
                <HelpOutlineOutlinedIcon className="iconSpan" />
                Help Center
              </span>
              <span>
                <ExitToAppOutlinedIcon className="iconSpan" />
                Sign Out of Netflix
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
