import React from "react";
import "./search.css";

const SearchComponent = (): React.ReactElement => {
  return (
    <div className="search__wrapper">
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
    </div>
  )
}

export default SearchComponent;
