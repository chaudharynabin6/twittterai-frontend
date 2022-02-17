// react stuff
import React from 'react'
// scss
import "./AnalysedTweets.scss"

// icons
import notification from "./../../assets/icons/notification.svg";
import home_breadcrumbs from "./../../assets/icons/home_breadcrumbs.svg";


const AnalysedTweets = () => {
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
          <span className="tweet__date tweet__date--head">Date</span>
        </div>
        <div className="tweet">
          <img
            src={home_breadcrumbs}
            alt=""
            className={
              0
                ? "tweet__sentiment-icon" +
                  " " +
                  "tweet__sentiment-icon--postive"
                : "tweet__sentiment-icon" +
                  " " +
                  "tweet__sentiment-icon--negative"
            }
          />
          <span
            className={
              0
                ? "tweet__sentiment-status" +
                  " " +
                  "tweet__sentiment-status--postive"
                : "tweet__sentiment-status" +
                  " " +
                  "tweet__sentiment-status--negative"
            }
          >
            Postive
          </span>
          <span className="tweet__text">Good morning every one</span>
          <span className="tweet__date">Dec 2, 2019</span>
        </div>
        <div className="tweet">
          <img
            src={notification}
            alt=""
            className={
              1
                ? "tweet__sentiment-icon" +
                  " " +
                  "tweet__sentiment-icon--postive"
                : "tweet__sentiment-icon" +
                  " " +
                  "tweet__sentimnet-icon--negative"
            }
          />
          <span
            className={
              1
                ? "tweet__sentiment-status" +
                  " " +
                  "tweet__sentiment-status--postive"
                : "tweet__sentiment-status" +
                  " " +
                  "tweet__sentimnet-status--negative"
            }
          >
            Postive
          </span>
          <span className="tweet__text">Good morning every one</span>
          <span className="tweet__date">Dec 2, 2019</span>
        </div>
      </div>
    </>
  )
}

export default AnalysedTweets