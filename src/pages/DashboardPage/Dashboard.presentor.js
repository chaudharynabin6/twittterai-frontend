import React from "react";

// local import
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
      <TweetStatus />
      <ChartGroup />
      <AnalysedTweets analysed_tweets={analysed_tweets} />
    </>
  );
};

export default DashboardPresentor;
