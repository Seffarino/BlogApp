import "../styles/search.css";
import React, { useState } from "react";

function Search() {
  const [isOn, setIsOn] = useState(false);
  if (isOn) {
    return (
      <div className="search on">
        <input type="search" id="site-search" name="q"></input>
      </div>
    );
  } else {
    return <div className="search" onClick={() => setIsOn(true)}></div>;
  }
}

export default Search;
