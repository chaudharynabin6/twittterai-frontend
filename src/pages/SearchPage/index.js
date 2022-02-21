import React from "react";
import SearchPagePresentor from "./SearchPagePresentor";
import { SearchPageProvider } from "./SearchpageContext";
const SearchPage = () => {
  return (
    <SearchPageProvider>
      <SearchPagePresentor />
    </SearchPageProvider>
  );
};

export default SearchPage;
