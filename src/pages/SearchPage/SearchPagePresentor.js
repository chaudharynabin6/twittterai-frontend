import React, { useEffect, useRef } from "react";

// scss
import "./SearchPage.scss";
// icons
import arrow_back from "./../../assets/icons/arrow_back.svg";
import search from "./../../assets/icons/search.svg";
import cancel from "./../../assets/icons/cancel.svg";
import more_horiz from "./../../assets/icons/more_horiz.svg";
import verified from "./../../assets/icons/verified.svg";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

// images
import elon_musk from "./../../assets/images/elon_musk.jpg";
import jeff_bezos from "./../../assets/images/jeff_bezos.jpg";
import { useSearchPageContext } from "./SearchpageContext";

const SearchPagePresentor = () => {
  const {
    currentSearchUser,
    searchUser,
    searchedUsers,
    toggleAnalysing,
    deleteSearchedUser,
  } = useSearchPageContext();
  useEffect(() => {
    console.log(currentSearchUser);
    console.log(searchedUsers);
  }, []);
  const searchInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(searchInput.current.value);
  };
  return (
    <>
      {/* search page */}
      <div className="search">
        {/* search bar */}
        <div className="search-bar">
          <img src={arrow_back} alt="arrow_back" />
          <form
            className="search-input"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <img src={search} alt="search" />
            <label htmlFor="search"></label>
            <input
              type="text"
              name="search"
              id="search"
              ref={searchInput}
              placeholder="search"
            />
            <img src={cancel} alt="cancel" />
          </form>
          <img src={more_horiz} alt="more_horiz" />
        </div>
        {/* search box */}
        <div className="search__box">
          <div className="search__result">
            {searchedUsers.map((user) => {
              const {
                user_id,
                username,
                name,
                profile_image_url,
                verified,
                isAnalysing,
              } = user;

              return (
                <div key={user_id} className="celebrity">
                  {/* image */}
                  <img
                    src={profile_image_url}
                    alt=""
                    className="celebrity__img"
                  />
                  {/* username and name */}
                  <div className="celebrity__detail">
                    <div className="celebrity__name">
                      <span> {`${name}`}</span>
                      {verified && (
                        <CheckCircleOutlineIcon className="celebrity__verified-icon" />
                      )}
                    </div>
                    <p className="celebrity__username">{`@${username}`}</p>
                  </div>
                  {/* analyse and analysing button */}
                  <button
                    className={`celebrity__follow ${
                      isAnalysing
                        ? "celebrity__follow--analysing"
                        : "celebrity__follow--analyse"
                    }`}
                    onClick={(e) => {
                      toggleAnalysing(user_id);
                    }}
                  >
                    {isAnalysing ? "Analysing" : "Analyse"}
                  </button>
                  {/* close button */}
                  <CloseIcon
                    className="celebrity__close-icon"
                    onClick={(e) => {
                      deleteSearchedUser(user_id);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPagePresentor;
