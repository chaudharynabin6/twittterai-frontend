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

const TweetSearchPagePresenter = () => {

    const {
        analyzedTweets,
        searchTweets
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
                <AnalyzedTweets analysed_tweets={analyzedTweets} />
            </section>
        </>
    );
}

export default TweetSearchPagePresenter;