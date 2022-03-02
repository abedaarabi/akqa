import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./top.scss";
const Top = () => {
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
        <div className="sarch-icon">
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
            name="sarch input"
            placeholder="SARCH"
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
