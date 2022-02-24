// global
import React from "react";
import classNames from "classnames";
// icons @mui
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";

// scss
import "./AnalysedTweets.scss";

const AnalysedTweets = (props) => {
  const { analysed_tweets } = props;
  return (
    <>
      <div className="analysed-tweets">
        <div className="tweet tweet--head">
          <span
            alt=""
            className="tweet__sentiment-icon tweet__sentiment-icon--head"
          />
          <span className="tweet__sentiment-status tweet__sentiment-status--head">
            Status
          </span>
          <span className="tweet__text tweet__text--head">Tweet</span>
          <span className="tweet__date tweet__date--head">Tweet ID</span>
        </div>
        <div className="analysed-tweets__container">
          {analysed_tweets.map((item, index) => {
            return (
              <div key={item.id} className="tweet">
                {/* <img
                src={home_breadcrumbs}
                alt=""
                className={classNames({
                  "tweet__sentiment-icon": true,
                  "tweet__sentiment-icon--positive": item.label === "POSITIVE",
                  "tweet__sentiment-icon--negative": item.label === "NEGATIVE",
                })}
              /> */}
                {item.label === "POSITIVE" ? (
                  <SentimentSatisfiedAltRoundedIcon
                    className={classNames({
                      "tweet__sentiment-icon": true,
                      "tweet__sentiment-icon--positive":
                        item.label === "POSITIVE",
                      "tweet__sentiment-icon--negative":
                        item.label === "NEGATIVE",
                    })}
                  />
                ) : (
                  <SentimentDissatisfiedRoundedIcon
                    className={classNames({
                      "tweet__sentiment-icon": true,
                      "tweet__sentiment-icon--positive":
                        item.label === "POSITIVE",
                      "tweet__sentiment-icon--negative":
                        item.label === "NEGATIVE",
                    })}
                  />
                )}
                <span
                  className={classNames({
                    "tweet__sentiment-status": true,
                    "tweet__sentiment-status--positive":
                      item.label === "POSITIVE",
                    "tweet__sentiment-status--negative":
                      item.label === "NEGATIVE",
                  })}
                >
                  {item.label}
                </span>
                <span className="tweet__text">{item.text}</span>
                <span className="tweet__date">{item.tweet_id}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnalysedTweets;
