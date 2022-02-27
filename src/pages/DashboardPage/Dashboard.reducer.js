const DashboardReducer = (state, action) => {
  if (action.type === "FETCH_ANALYSED_TWEETS") {
    return { ...state, analysed_tweets: action.payload.analysed_tweets };
  }
  if (action.type === "FETCH_TOTAL_SUMMARY") {
    return { ...state, total_summary: action.payload.total_summary };
  }
  if (action.type === "FETCH_TIME_SERIES_SUMMARY") {
    return {
      ...state,
      time_series_summary: action.payload.time_series_summary,
    };
  } 
  throw new Error(
    `>>${action.type}<< Action is not available in Dashboard.reducer.js`
  );
};

export default DashboardReducer;
