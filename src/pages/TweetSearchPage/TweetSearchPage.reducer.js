import { search_tweet_action } from "./TweetSearchPage.actions"


const TweetSearchPageReducer = (state,action) => {
    switch(action.type){
        case search_tweet_action : {
           
            
            return {
                ...state,
                analyzedTweets: [...action.payload.analyzedTweets]
            }
               
            
        }

        default :{
            throw new Error(`>>${action.type}<< action is not in TweetSearchPageReducer`);
        }
    }
}

export default TweetSearchPageReducer;

