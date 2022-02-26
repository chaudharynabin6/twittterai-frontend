const DashboardReducer = (state, action) => {
  if (action.type === "FETCH_ANALYSED_TWEETS") {
    return { ...state, analysed_tweets: action.payload.analysed_tweets };
  }
  throw new Error(
    `>>${action.type}<< Action is not available in Dashboard.reducer.js`
  );
};

export default DashboardReducer;
