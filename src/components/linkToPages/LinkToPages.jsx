import React from "react";
import "./linkToPages.scss";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const LinkToPages = () => {
  return (
    <div className="containerPages">
      <div className="page">
        <span className="toBeReplaced">View all the pages by selecting below </span>
        <div className="dropdown">
          <ArrowDropDownIcon className="icon" />
          <div className="options">
            <div name="select">
              <Link to="/">
                <span value="home">Home</span>
              </Link>

              <Link to="/login">
                <span>Login</span>
              </Link>
              <Link to="/register">
                <span value="register">Register</span>
              </Link>
              <Link to="/watch">
                <span value="watch">Watch</span>
              </Link>
              <Link to="/profiles">
                <span value="profiles">Profiles</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
