import React from "react";

// css
import "./Navbar.scss";
//icons
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="twitter-user-container">
          <div className="twitter-user__img-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
              className="twitter-user__img"
            />
          </div>
          <div className="twitter-user__name">Elon Musk</div>
        </div>
        <div className="util__border"></div>
        <div className="navbar__items">
          <div className="navbar__item">
            <label className="navbar__item__icon-container">
              <PersonSearchIcon className="navbar__item__icon" />
            </label>
            <label className="navbar__item__name">Search</label>
          </div>
          <div className="navbar__item">
            <label className="navbar__item__icon-container">
              <AnalyticsIcon className="navbar__item__icon" />
            </label>
            <label className="navbar__item__name">Dashboard</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
