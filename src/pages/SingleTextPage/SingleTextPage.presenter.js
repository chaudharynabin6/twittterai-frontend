
import { useRef } from "react";
import AnalyzedTweets from "../../components/AnalyzedTweets/AnalyzedTweets";
import { useSingleTextPageContext } from "./SingleTextPage.context"

import "./SingleTextPage.scss"

const SingleTextPagePresenter = () => {

    const {
        analyzeText,
        analyzedTweets
    } = useSingleTextPageContext();

    const formInput = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInput.current.value);
        analyzeText(formInput.current.value);
        formInput.current.value = "";
    };




    return (
        <>
            <section className="single-text-container">

                <form
                    className="single-text-form"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >

                    <label htmlFor="text"></label>
                    <textarea
                        className="single-text-input-text"
                        type="text"
                        name="text"
                        id="text"
                        ref={formInput}
                        placeholder="text"
                    />

                    <input className="single-text-input-submit single-text-input-submit-white single-text-input-submit-animated" type="submit" value="Submit" />

                </form>

                <div className="single-text-result">
                    {/* tweet results */}
                    {
                        analyzedTweets.length > 0 && <AnalyzedTweets analysed_tweets={analyzedTweets} />
                    }
                   
                </div>

            </section>
        </>
    );
}

export default SingleTextPagePresenter