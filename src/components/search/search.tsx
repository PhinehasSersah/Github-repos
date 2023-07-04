import React from "react";
import "./search.css";
import { ShowSearchProps } from "../../App";

const SearchComponent = ({
  setShowSearch,
  showSearch,
}: ShowSearchProps): React.ReactElement => {
  return (
    <div className={`search__wrapper ${showSearch && "translate__search"}`}>
      <h2 className="search__headline">
        Your github repo's all in just one click
      </h2>
      <div className="input__wrapper">
        <input
          className="input__field"
          type="search"
          placeholder="Enter github username"
          required
          autoComplete="off"
        />
        <div className="button__wrapper">
          <button className="button">
            <span>Search Repo's</span>
          </button>
        </div>
      </div>
      <i onClick={() => setShowSearch(false)} className="cross__icon">
        &#x2715;
      </i>
    </div>
  );
};

export default SearchComponent;
