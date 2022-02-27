import React from "react";

// local import

// scss
import "./Dashboard.scss"
// components

import AnalysedTweets from "../../components/AnalysedTweets/AnalysedTweets";
import ChartGroup from "../../components/ChartGroup/ChartGroup";
import TweetStatus from "../../components/TweetStatus/TweetStatus";
// context
import { useDashboardPageContext } from "./Dashboard.context";
const DashboardPresentor = () => {
  const { analysed_tweets } = useDashboardPageContext();

  return (
    <>
      <div className="dashboard-page">
        <TweetStatus />
        <ChartGroup />
        <AnalysedTweets analysed_tweets={analysed_tweets} />
      </div>
    </>
  );
};

export default DashboardPresentor;
