import React from "react";

// local import
// components
import AnalysedTweets from "../../components/AnalysedTweets/AnalysedTweets";
import ChartGroup from "../../components/ChartGroup/ChartGroup";
import { useDashboardPageContext } from "./Dashboard.context";
const DashboardPresentor = () => {
  const { analysed_tweets } = useDashboardPageContext();
  return (
    <>
      {/* <AnalysedTweets analysed_tweets={analysed_tweets} /> */}
      <ChartGroup />
    </>
  );
};

export default DashboardPresentor;
