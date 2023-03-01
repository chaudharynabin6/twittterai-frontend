import React, { useContext, useReducer } from "react";
import TweetSearchPageReducer from "./TweetSearchPage.reducer";
import axios from "axios";
import { search_tweet_action,reset_action } from "./TweetSearchPage.actions";
import { arrayToExcel } from "../../utils/ArrayToExcelConverter";


const DOMAIN = process.env.REACT_APP_DOMAIN;

const initialState = {
    analyzedTweets: [],
    next_token : null,
    keyword : null
};

const TweetSearchPageContext = React.createContext();

const TweetSearchPageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TweetSearchPageReducer, initialState);

    const searchTweets = async (keyword) => {

        try {
            let url = `http://${DOMAIN}/search/tweets/${keyword}`;
            let res = await axios.get(url);

            let data= res.data;
            console.log("🚀 ~ file: TweetSearchPage.context.js:25 ~ searchTweets ~ analysed_tweets:", typeof (data) ,data)



            dispatch({
                type: search_tweet_action,
                payload: { analyzedTweets: data.tweets , next_token : data.next_token,keyword:keyword },
            });
        } catch (error) {
            console.log("🚀 ~ file: TweetSearchPage.context.js:27 ~ searchTweets ~ error:", error)

        }
    }


    const moreTweets = async (keyword,next_token) => {

        try {
            let url = `http://${DOMAIN}/search/tweets/${keyword}/${next_token}`;
            let res = await axios.get(url);

            let data = res.data;
            console.log("🚀 ~ file: TweetSearchPage.context.js:25 ~ searchTweets ~ analysed_tweets:", typeof (data), data)



            dispatch({
                type: search_tweet_action,
                payload: { analyzedTweets: data.tweets, next_token: data.next_token,keyword:keyword },
            });
        } catch (error) {
            console.log("🚀 ~ file: TweetSearchPage.context.js:27 ~ searchTweets ~ error:", error)

        }
    }
    
    const reset = ()=> {
        dispatch({
            type: reset_action,
            payload:initialState
        });
    }

    const downloadExcel = () => {
        let data = [["Sentiment","Text","Score"]]
        state.analyzedTweets.forEach((item)=>{
            data.push([item.label,item.text,item.score])
        })
        arrayToExcel(data,state.keyword)
    }
    

    return (
        <TweetSearchPageContext.Provider
            value={{
                ...state,
                // functions
                searchTweets,
                moreTweets,
                reset,
                downloadExcel
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