import { reset_action, search_tweet_action } from "./TweetSearchPage.actions"


const TweetSearchPageReducer = (state,action) => {
    switch(action.type){
        case search_tweet_action : {
           
            if(state.keyword === action.payload.keyword){
                return {
                    ...state,
                    analyzedTweets: [...state.analyzedTweets, ...action.payload.analyzedTweets],
                    next_token: action.payload.next_token,
                    keyword : action.payload.keyword,
                }
            }

            return {
                ...state,
                analyzedTweets: [...action.payload.analyzedTweets],
                next_token: action.payload.next_token,
                keyword: action.payload.keyword,
            }
        
            


        }

        case reset_action: {

            return {
                ...state,
                ...action.payload
            }


        }

        default :{
            throw new Error(`>>${action.type}<< action is not in TweetSearchPageReducer`);
        }
    }
}

export default TweetSearchPageReducer;

