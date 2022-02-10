import "./App.scss";

// icons
import arrow_back from "./assets/icons/arrow_back.svg";
import search from "./assets/icons/search.svg";
import cancel from "./assets/icons/cancel.svg";
import more_horiz from "./assets/icons/more_horiz.svg";

// images
import elon_musk from "./assets/images/elon_musk.jpg";
import jeff_bezos from "./assets/images/jeff_bezos.jpg";

// components

import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <SearchPage></SearchPage>
    </div>
  );
}

export default App;
