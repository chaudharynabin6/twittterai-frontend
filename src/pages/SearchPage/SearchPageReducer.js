const SearchPageReducer = (state, action) => {
  // -----------------------------------------------------
  if (action.type === "SEARCH_USER") {
    return { ...state, currentSearchUser: action.payload.user };
  }

  // ------------------------------------------------------
  if (action.type === "ADD_TO_SEARCHED_USER") {
    let isUserAlreadyExists = state.searchedUsers.find(
      (item) => item.user_id === action.payload.user_id
    );
    if (!isUserAlreadyExists) {
      return {
        ...state,
        searchedUsers: [action.payload, ...state.searchedUsers],
      };
    }
    return state;
  }
  // --------------------------------------------------------
  if (action.type === "TOGGLE_ANALYSING") {
    let newSearchedUser = state.searchedUsers.map((item) => {
      if (item.user_id === action.payload.user_id) {
        return { ...item, isAnalysing: !item.isAnalysing };
      }
      return item;
    });

    return { ...state, searchedUsers: newSearchedUser };
  }
  // -------------------------------------------------
  if (action.type === "DELETE_SEARCHED_USER") {
    let newSearchedUser = state.searchedUsers.filter(
      (item) => item.user_id !== action.payload.user_id
    );

    return { ...state, searchedUsers: newSearchedUser };
  }
  // ---------------------------------------
  // fetch all searched User
  if (action.type === "FETCH_ALL_SEARCHED_USERS") {
    return { ...state, searchedUsers: action.payload.searchedUsers };
  }

  // --------------------------------------------------------
  if (action.type === "REMOVE_ANALYSING") {
    let newSearchedUser = state.searchedUsers.map((item) => {
      if (item.user_id === action.payload.user_id) {
        return { ...item, isAnalysing: false };
      }
      return item;
    });

    return { ...state, searchedUsers: newSearchedUser };
  }

  throw new Error(`>>${action.type}<< action is not in SearchPageReducer`);
};

export default SearchPageReducer;
