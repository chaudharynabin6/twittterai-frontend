import React, { useContext, useReducer } from "react";
import TweetSearchPageReducer from "./TweetSearchPage.reducer";
import axios from "axios";
import { search_tweet_action } from "./TweetSearchPage.actions";


const DOMAIN = process.env.REACT_APP_DOMAIN;

const initialState = {
    analyzedTweets: []
};

const TweetSearchPageContext = React.createContext();

const TweetSearchPageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TweetSearchPageReducer, initialState);

    const searchTweets = async (keyword) => {

        try {
            let url = `http://${DOMAIN}/search/tweets/${keyword}`;
            let res = await axios.get(url);

            let analysed_tweets= res.data;
            console.log("🚀 ~ file: TweetSearchPage.context.js:25 ~ searchTweets ~ analysed_tweets:", typeof (analysed_tweets))



            dispatch({
                type: search_tweet_action,
                payload: { analyzedTweets: analysed_tweets },
            });
        } catch (error) {
            console.log("🚀 ~ file: TweetSearchPage.context.js:27 ~ searchTweets ~ error:", error)

        }
    }

    return (
        <TweetSearchPageContext.Provider
            value={{
                ...state,
                // functions
                searchTweets
            }}
        >
            {children}
        </TweetSearchPageContext.Provider>
    )
};

export const useTweetSearchPageContext = () => {
    return useContext(TweetSearchPageContext);
}

export {
    TweetSearchPageContext,
    TweetSearchPageProvider
}