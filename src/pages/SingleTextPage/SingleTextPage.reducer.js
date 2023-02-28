import { submit_text_action } from "./SingleTextPage.actions";



const SingleTextPageReducer = (state, action) => {
    switch (action.type) {
        case submit_text_action: {


            return {
                ...state,
                analyzedTweets: [...state.analyzedTweets, action.payload.analyzedTweets]
            }


        }

        default: {
            throw new Error(`>>${action.type}<< action is not in SingleTextPageReducer`);
        }
    }
}

export default SingleTextPageReducer;
