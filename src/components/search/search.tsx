import React, { useState } from "react";
import "./search.css";
import { ShowSearchProps } from "../../App";

const SearchComponent = ({
  setShowSearch,
  showSearch,
}: ShowSearchProps): React.ReactElement => {
  const [githubUserName, setgithubUserName] = useState<string>("");

  const [repositories, setrepositories] = useState([]);
  console.log(repositories);

  const fetchRepositories = async () => {
    if (githubUserName === "") return;

    try {
      const response = await fetch(
        `https://api.github.com/users/${githubUserName}/repos?type=all&sort=updated`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      setrepositories(data);
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };

  return (
    <div className={`search__wrapper ${showSearch && "translate__search"}`}>
      <h2 className="search__headline">
        Your github repo's all in just one click
      </h2>
      <div className="input__wrapper">
        <input
          value={githubUserName}
          onChange={(event) => setgithubUserName(event.target.value)}
          className="input__field"
          type="search"
          placeholder="Enter github username"
          required
          autoComplete="off"
        />
        <div className="button__wrapper">
          <button onClick={fetchRepositories} className="button">
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
