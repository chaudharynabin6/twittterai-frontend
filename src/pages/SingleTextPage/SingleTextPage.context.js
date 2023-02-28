import axios from "axios";
import React, { useContext } from "react";
import { useReducer } from "react";
import { submit_text_action } from "./SingleTextPage.actions";
import SingleTextPageReducer from "./SingleTextPage.reducer";




const DOMAIN = process.env.REACT_APP_DOMAIN;

const initialState = {
    analyzedTweets: []
};

const SingleTextPageContext = React.createContext();

const SingleTextPageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SingleTextPageReducer, initialState);


    const analyzeText = async (text) => {

        try {
            let url = `http://${DOMAIN}/search/text/${text}`;
            let res = await axios.get(url);

            let analysed_tweets = res.data;



            dispatch({
                type: submit_text_action,
                payload: { analyzedTweets: analysed_tweets },
            });
        } catch (error) {
            console.log("🚀 ~ file: SingleTextPage.context.js:35 ~ searchTweets ~ error:", error)


        }
    }

    return (
        <SingleTextPageContext.Provider
            value={
                {
                    ...state,
                    // functions
                    analyzeText
                }
            }
        >
            {children}
        </SingleTextPageContext.Provider>
    )
}

export const useSingleTextPageContext = () => {
    return useContext(SingleTextPageContext);
}


export {
    SingleTextPageContext,
    SingleTextPageProvider
}