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
      <section className="analysed-tweets-container">
        <div className="analysed-tweets">
          <div className="tweet tweet--head">
            <span
              alt=""
              className="tweet__sentiment-icon tweet__sentiment-icon--head"
            />
            <span className="tweet__sentiment-status tweet__sentiment-status--head">
              Status
            </span>
            <div className="tweet__text tweet__text--head">
              <span className="tweet__text--head-item">Tweet</span>
            </div>
            <span className="tweet__date tweet__date--head">Tweet ID</span>
          </div>
          <div className="analysed-tweets__scroll-view">
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
                  <div className="tweet__text">
                    <span className="tweet__text-item">{item.text}</span>
                  </div>
                  <span className="tweet__date">{item.tweet_id}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalysedTweets;
