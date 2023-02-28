import { useTweetSearchPageContext } from "./TweetSearchPage.context"
import AnalyzedTweets from "../../components/AnalyzedTweets/AnalyzedTweets"
import { useRef } from "react";
// scss
import "./TweetSearchPage.scss"

// icons
import arrow_back from "./../../assets/icons/arrow_back.svg";
import search from "./../../assets/icons/search.svg";
import more_horiz from "./../../assets/icons/more_horiz.svg";
import cancel from "./../../assets/icons/cancel.svg";
import AnalyzedTweetsWithScrollListener from "../../components/AnalyzedTweetsWithScrollListener/AnalyzedTweetsWithScrollListener";

const TweetSearchPagePresenter = () => {

    const {
        analyzedTweets,
        searchTweets,
        moreTweets,
        next_token,
        keyword,
        reset
    } = useTweetSearchPageContext();



    const searchInput = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        searchTweets(searchInput.current.value);
    };

    return (
        <>

            {/* search page */}
            <section className="tweet-search-page">
                <div className="tweet-search">
                    {/* search bar */}
                    <div className="tweet-search-bar">
                        <img src={arrow_back} alt="arrow_back" />
                        <form
                            className="tweet-search-input"
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            <img src={search} alt="search" />
                            <label htmlFor="search"></label>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                ref={searchInput}
                                placeholder="search"
                            />
                            <img src={cancel} alt="cancel" />
                        </form>
                        <img src={more_horiz} alt="more_horiz" />
                    </div>
                </div>

                {/* tweet results */}
                {

                    analyzedTweets.length > 0 && <AnalyzedTweetsWithScrollListener analysed_tweets={analyzedTweets} onScrollToEnd={() => {
                        moreTweets(keyword, next_token);

                        console.log("🚀 ~ file: TweetSearchPage.presenter.js:71 ~ TweetSearchPagePresenter ~ next_token:", next_token)
                    }} />
                }
                

                {
                    
                    next_token && <div className="tweet-search__more">
                        <button onClick={
                            (event) => {
                                moreTweets(keyword, next_token)
                            }
                        } className="tweet-search__more-btn tweet-search__more-btn--more">More Tweets</button>
                        <button onClick={
                            (e)=>{
                                reset()
                            }
                        } className="tweet-search__more-btn tweet-search__more-btn--red">Reset</button>
                    </div>
                }
                

            
            </section>
        </>
    );
}

export default TweetSearchPagePresenter;