import React  from "react";
import TweetSearchPagePresenter from "./TweetSearchPage.presenter";
import { TweetSearchPageProvider } from "./TweetSearchPage.context";

const TweetSearchPage = () => {
    
    return (
        <TweetSearchPageProvider>
            <TweetSearchPagePresenter/>
        </TweetSearchPageProvider>
    );
};
export default TweetSearchPage;