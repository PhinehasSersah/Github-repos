import React, { useState } from "react";
import "./search.css";
import { ShowSearchProps } from "../../App";

const SearchComponent = ({
  setShowSearch,
  showSearch,
}: ShowSearchProps): React.ReactElement => {
  const [githubUserName, setgithubUserName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [repositories, setrepositories] = useState<any>([]);
  const [badRequest, setBadRequest] = useState<string>("");

  const fetchRepositories = async () => {
    if (githubUserName === "") {
      setError("Please enter a github user name");
      return;
    }

    try {
      setgithubUserName("");
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${githubUserName}/repos?type=all&sort=updated`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (response.status === 404) {
        setBadRequest("Repository not found, please try again");
        setLoading(false);
        setrepositories([]);
      }

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      setrepositories(data);
      setLoading(false);
      setBadRequest("");
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className={`search__wrapper ${showSearch && "translate__search"}`}>
        <h2 className="search__headline">
          Your github repo's all in just one click
        </h2>
        <div className="input__wrapper">
          <input
            value={githubUserName}
            onChange={(event) => {
              setgithubUserName(event.target.value);
              setError("");
            }}
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
        <p className="error_message">{error}</p>
        <i onClick={() => setShowSearch(false)} className="cross__icon">
          &#x2715;
        </i>
      </div>

      <div className="repo__wrapper">
        {loading && (
          <div className="loader">
            <svg
              version="1.1"
              id="loader-1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 50 50"
              xmlSpace="preserve"
            >
              <path
                fill="#000"
                d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
              >
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        )}

        {repositories?.map((repoData) => (
          <a
            key={repoData?.node_id}
            href={repoData?.svn_url}
            className="repository_anchor"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <div className="repository_wrapper">
              <img
                src={repoData?.owner?.avatar_url}
                alt={repoData?.owner?.name}
                className="repo__image"
              />
              <div className="reponame_wrapper">
                <p>{repoData?.name}</p>
                <p className="visibility">{repoData?.visibility}</p>
              </div>
            </div>
          </a>
        ))}

        {repositories.length < 1 && !badRequest ? (
          <p className="loader"> Repository data displays here!</p>
        ) : (
          badRequest && <p className="bad__request">{badRequest}</p>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
