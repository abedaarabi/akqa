import React from "react";
import "./searchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const SearchBar = () => {
  return (
    <div className="top-container">
      <div>
        <h1>
          DERMA <span className="world">World</span>
        </h1>
        <p>
          By <span className="pharma"> LEO Pharma</span>
        </p>
      </div>
      <div className="input-container">
        {/* TODO: check the accessibility */}
        <div className="search-icon">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="1x"
            fixedWidth={true}
          />
        </div>
        <div>
          <input
            id="search"
            type="text"
            name="search input"
            placeholder="SEARCH"
          />
        </div>
      </div>
    </div>
  );
};


