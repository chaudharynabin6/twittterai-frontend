import React from "react";
import "./TopBar.scss";
// icons
import home_breadcrumbs from "./../../assets/icons/home_breadcrumbs.svg";
import notification from "./../../assets/icons/notification.svg";

const TopBar = () => {
  return (
    <>
      <section className="topbar-container">
        <div className="topbar">
          <div className="topbar__page-info">
            <div className="topbar__page">
              <div className="topbar__page-link">
                <img
                  className="topbar__home-icon"
                  src={home_breadcrumbs}
                  alt=""
                />
                <label className="topbar__page-location">
                  / pages / Analytics
                </label>
              </div>
              <label className="topbar__page-title">Analytics</label>
            </div>
          </div>
          <div className="topbar__notification">
            <img
              src={notification}
              alt=""
              id="notification-icon"
              className="topbar__notification-icon"
            />
            <label
              htmlFor="notification-icon"
              className="topbar__notification-label"
            >
              15
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
