import React from "react";
import { SingleTextPageProvider } from "./SingleTextPage.context";
import SingleTextPagePresenter from "./SingleTextPage.presenter";


const SingleTextPage = () => {

    return (
        <SingleTextPageProvider>
            <SingleTextPagePresenter />
        </SingleTextPageProvider>
    );
};
export default SingleTextPage;