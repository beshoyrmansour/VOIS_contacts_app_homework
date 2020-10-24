import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vodafone_logo.svg";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <div className="d-flex justify-content-md-between justify-content-center align-items-center w-100">
        <Link className="navbar-brand" to="/">
          <img src={logo} height="50" alt="vodafone logo" />
        </Link>
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
