import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
    // <div>
    //   <h1 id="something-important">Adopt Me!</h1>
    //   <Pet name="Luna" animal="Dog" breed="havanese" />
    //   <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    //   <Pet name="Doink" animal="Cat" breed="Mixed" />
    // </div>
  );
};
render(<App />, document.querySelector("#root"));
