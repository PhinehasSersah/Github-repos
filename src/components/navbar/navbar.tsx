import React from "react";
import "./navbar.css";

type NavbarProps = {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({
  setShowSearch,
  showSearch,
}: NavbarProps): React.ReactElement => (
  <nav className="navbar">
    <div className="nav__wrapper">
      <a className="logo" href="#">
        <img
          className="logo__image"
          src="/github-mark.png"
          alt="github image"
        />
        <img
          className="logo__github"
          src="/GitHub_Logo.png"
          alt="github image"
        />
      </a>

      <div className="search__wrapper">
        <h1 className="headline">Search Repo's</h1>
        <svg
          onClick={() => setShowSearch(true)}
          className="search__icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 17 17"
        >
          <g></g>
          <path d="M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z" />
        </svg>
      </div>
    </div>
  </nav>
);

export default Navbar;
