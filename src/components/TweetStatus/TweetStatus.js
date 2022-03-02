import React from "react";

// scss
import "./TweetStatus.scss";
// icons
import positiveIcon from "./../../assets/icons/positive.svg";
import { useDashboardPageContext } from "../../pages/DashboardPage/Dashboard.context";

let negativeIcon = positiveIcon;
let fetchedIcon = positiveIcon;
let analysingIcon = positiveIcon;
const TweetStatus = () => {
  const { total_summary } = useDashboardPageContext();
  const { positive, negative, total, total_fetched } = total_summary;
  return (
    <>
      <section className="tweetstatus-container">
        <div className="tweetstatus">
          {/* positive */}
          <div className="tweetstatus__positive">
            <div className="tweetstatus__positive-icon">
              <img
                src={positiveIcon}
                alt=""
                className="tweetstatus__positive-icon__image"
              />
            </div>
            <div className="tweetstatus__positive-detail">
              <div className="tweetstatus__positive-info">
                <span className="tweetstatus__positive-heading">Positive</span>
                <span className="tweetstatus__positive-number">{positive}</span>
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
                src={negativeIcon}
                alt=""
                className="tweetstatus__negative-icon__image"
              />
            </div>
            <div className="tweetstatus__negative-detail">
              <div className="tweetstatus__negative-info">
                <span className="tweetstatus__negative-heading">negative</span>
                <span className="tweetstatus__negative-number">{negative}</span>
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
                src={fetchedIcon}
                alt=""
                className="tweetstatus__fetched-icon__image"
              />
            </div>
            <div className="tweetstatus__fetched-detail">
              <div className="tweetstatus__fetched-info">
                <span className="tweetstatus__fetched-heading">fetched</span>
                <span className="tweetstatus__fetched-number">
                  {total_fetched}
                </span>
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
                src={analysingIcon}
                alt=""
                className="tweetstatus__analysing-icon__image"
              />
            </div>
            <div className="tweetstatus__analysing-detail">
              <div className="tweetstatus__analysing-info">
                <span className="tweetstatus__analysing-heading">analysed</span>
                <span className="tweetstatus__analysing-number">{total}</span>
              </div>
              <div className="tweetstatus__analysing-change">
                <samp className="tweetstatus__analysing-percent">+55%</samp>{" "}
                than lask week
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TweetStatus;
