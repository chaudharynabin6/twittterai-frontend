import React from "react";

// scss
import "./TweetStatus.scss";
// icons
import positive from "./../../assets/icons/positive.svg";

const TweetStatus = () => {
  let negative = positive;
  let fetched = positive;
  let analysing = positive;
  return (
    <>
      <div className="tweetstatus">
        {/* positive */}
        <div className="tweetstatus__positive">
          <div className="tweetstatus__positive-icon">
            <img
              src={positive}
              alt=""
              className="tweetstatus__positive-icon__image"
            />
          </div>
          <div className="tweetstatus__positive-detail">
            <div className="tweetstatus__positive-info">
              <span className="tweetstatus__positive-heading">Positive</span>
              <span className="tweetstatus__positive-number">200</span>
            </div>
            <div className="tweetstatus__positive-change">
              <samp className="tweetstatus__positive-percent">+55%</samp> than
              lask week
            </div>
          </div>
        </div>
        {/* negative */}
        <div className="tweetstatus__negative">
          <div className="tweetstatus__negative-icon">
            <img
              src={negative}
              alt=""
              className="tweetstatus__negative-icon__image"
            />
          </div>
          <div className="tweetstatus__negative-detail">
            <div className="tweetstatus__negative-info">
              <span className="tweetstatus__negative-heading">negative</span>
              <span className="tweetstatus__negative-number">200</span>
            </div>
            <div className="tweetstatus__negative-change">
              <samp className="tweetstatus__negative-percent">+55%</samp> than
              lask week
            </div>
          </div>
        </div>
        {/* fetched */}
        <div className="tweetstatus__fetched">
          <div className="tweetstatus__fetched-icon">
            <img
              src={fetched}
              alt=""
              className="tweetstatus__fetched-icon__image"
            />
          </div>
          <div className="tweetstatus__fetched-detail">
            <div className="tweetstatus__fetched-info">
              <span className="tweetstatus__fetched-heading">fetched</span>
              <span className="tweetstatus__fetched-number">200</span>
            </div>
            <div className="tweetstatus__fetched-change">
              <samp className="tweetstatus__fetched-percent">+55%</samp> than
              lask week
            </div>
          </div>
        </div>
        {/* analysed */}
        <div className="tweetstatus__analysing">
          <div className="tweetstatus__analysing-icon">
            <img
              src={analysing}
              alt=""
              className="tweetstatus__analysing-icon__image"
            />
          </div>
          <div className="tweetstatus__analysing-detail">
            <div className="tweetstatus__analysing-info">
              <span className="tweetstatus__analysing-heading">analysing</span>
              <span className="tweetstatus__analysing-number">200</span>
            </div>
            <div className="tweetstatus__analysing-change">
              <samp className="tweetstatus__analysing-percent">+55%</samp> than
              lask week
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetStatus;
