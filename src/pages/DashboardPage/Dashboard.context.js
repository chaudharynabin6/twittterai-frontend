// global import
import axios from "axios";
import React, { useReducer, useContext, useEffect } from "react";

// local import
import DashboardReducer from "./Dashboard.reducer";

// code

const DOMAIN = process.env.REACT_APP_DOMAIN;
// creating context
const DashboardContext = React.createContext();

const initialState = {
  loading: false,
  analysed_tweets: [],
  user: 783214,
  total_summary: {},
  time_series_summary: [],
};

const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DashboardReducer, initialState);
  // fetching analysed tweets
  useEffect(() => {
    const fetch_analyed_tweets = async () => {
      let url = `http://${DOMAIN}/tweet-manager/analysed-tweets/${state.user}`;
      let res = await axios.get(url);

      let analysed_tweets = res.data;

      dispatch({
        type: "FETCH_ANALYSED_TWEETS",
        payload: { analysed_tweets },
      });
    };
    fetch_analyed_tweets();
  }, [state.user]);
  // fetch total summary of current user
  useEffect(() => {
    const fetch_total_summary = async () => {
      let url = `http://${DOMAIN}/tweet-manager/total-summary/${state.user}`;
      let res = await axios.get(url);

      let total_summary = res.data;

      dispatch({
        type: "FETCH_TOTAL_SUMMARY",
        payload: { total_summary },
      });
    };
    fetch_total_summary();
  }, [state.user]);

  // fetch time series summary of current user
  useEffect(() => {
    const fetch_time_series_summary = async () => {
      let url = `http://${DOMAIN}/tweet-manager/time-series-summary/${state.user}`;
      let res = await axios.get(url);

      let time_series_summary = res.data;

      dispatch({
        type: "FETCH_TIME_SERIES_SUMMARY",
        payload: { time_series_summary },
      });
    };
    fetch_time_series_summary();
  }, [state.user]);
  return (
    <DashboardContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardPageContext = () => {
  return useContext(DashboardContext);
};

export { DashboardContext, DashboardProvider };
