import React, { useReducer, useState, useContext, useEffect } from "react";
import axios from "axios";
// local import
import { successData } from "./data";
import SearchPageReducer from "./SearchPageReducer";

// code
const DOMAIN = process.env.REACT_APP_DOMAIN;
const SearchPageContext = React.createContext();

const initialState = {
  loading: false,
  currentSearchUser: {},
  searchedUsers: [],
};
const SearchPageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchPageReducer, initialState);

  // searching user and setting user in currentSearchUser
  const searchUser = async (user) => {
    user = user.toLowerCase().split(" ").join("");
    let url = `http://${DOMAIN}/search/user/${user}`;
    let response = await fetch(url);
    let data = await response.json();
    if (data?.data && data.data.length > 0) {
      let user = data.data[0];
      user.user_id = user.id;
      user.isHidden = false;
      delete user.id;
      dispatch({ type: "SEARCH_USER", payload: { user: user } });
    }
  };
  // when the user is searched response is returned then changing searchedUsers
  useEffect(() => {
    if (state.currentSearchUser?.user_id) {
      dispatch({
        type: "ADD_TO_SEARCHED_USER",
        payload: { ...state.currentSearchUser, isAnalysing: false },
      });
    }
  }, [state.currentSearchUser]);

  // handling toggleAnalysing
  const toggleAnalysing = (user_id) => {
    dispatch({
      type: "TOGGLE_ANALYSING",
      payload: { user_id },
    });
  };

  // deleting a searchedUser
  const deleteSearchedUser = (user_id) => {
    dispatch({
      type: "REMOVE_ANALYSING",
      payload: { user_id },
    });
    setTimeout(() => {
      dispatch({
        type: "DELETE_SEARCHED_USER",
        payload: { user_id },
      });
    }, 5000);
  };

  // done: send isAnalysing and all data  of the twitter user
  // when the searchedUsers state changes
  useEffect(() => {
    const patchData = async () => {
      if (state.searchedUsers.length > 0) {
        let url = `http://${DOMAIN}/search/user/`;
        const res = await axios.patch(url, state.searchedUsers);
      }
    };
    patchData();
  }, [state.searchedUsers]);

  //done:when the component first render
  // at the first render fetch all the twitter user by thier id
  // and merge the isAnalysing state together

  useEffect(() => {
    const fetchAllUsers = async () => {
      let url = `http://${DOMAIN}/search/user/`;
      const res = await axios.get(url);

      console.log(res.data);
      let searchedUsers = res.data;
      dispatch({
        type: "FETCH_ALL_SEARCHED_USERS",
        payload: { searchedUsers },
      });
    };
    fetchAllUsers();
  }, []);

  return (
    <SearchPageContext.Provider
      value={{ ...state, searchUser, toggleAnalysing, deleteSearchedUser }}
    >
      {children}
    </SearchPageContext.Provider>
  );
};

export const useSearchPageContext = () => {
  return useContext(SearchPageContext);
};

export { SearchPageContext, SearchPageProvider };
