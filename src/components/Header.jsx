import React from "react";
import logo from "../assets/vodafone_logo.svg";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <div className="d-flex justify-content-between align-items-center w-100">
        <a className="navbar-brand" href="#">
          <img src={logo} height="50" alt="" />
        </a>
      </div>

      <div className="collapse navbar-collapse">
        <form className="form-inline d-flex flex-row">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
