import React from "react";

// scss
import "./SearchPage.scss";
// icons
import arrow_back from "./../../assets/icons/arrow_back.svg";
import search from "./../../assets/icons/search.svg";
import cancel from "./../../assets/icons/cancel.svg";
import more_horiz from "./../../assets/icons/more_horiz.svg";
import verified from "./../../assets/icons/verified.svg";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

// images
import elon_musk from "./../../assets/images/elon_musk.jpg";
import jeff_bezos from "./../../assets/images/jeff_bezos.jpg";

const SearchPage = () => {
  return (
    <>
      {/* search page */}
      <div className="search">
        {/* search bar */}
        <div className="search-bar">
          <img src={arrow_back} alt="arrow_back" />
          <form className="search-input" action="">
            <img src={search} alt="search" />
            <label htmlFor="search"></label>
            <input type="text" name="search" id="search" placeholder="search" />
            <img src={cancel} alt="cancel" />
          </form>
          <img src={more_horiz} alt="more_horiz" />
        </div>
        {/* search box */}
        <div className="search__box">
          <div className="search__result">
            <div className="celebrity">
              <img src={elon_musk} alt="" className="celebrity__img" />
              <div className="celebrity__detail">
                <div className="celebrity__name">
                  <span>Elon Musk</span>
                  <CheckCircleIcon className="celebrity__verified-icon" />
                </div>
                <p className="celebrity__username">@elonmusk</p>
              </div>
              <button className="celebrity__follow">Follow</button>
            </div>
            <div className="celebrity">
              <img src={jeff_bezos} alt="" className="celebrity__img" />
              <div className="celebrity__detail">
                <h3 className="celebrity__name">Jeff Bezos</h3>
                <p className="celebrity__username">@JeffBezos</p>
              </div>
              <button className="celebrity__follow">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
