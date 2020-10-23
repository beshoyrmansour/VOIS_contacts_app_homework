import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./fab.css";
const FAB = () => {
  const location = useLocation();
  console.log(location.pathname);
  return location.pathname === "/add-new" ? (
    <></>
  ) : (
    <Link to="/add-new" className="btn fab rounded-circle ">
      +
    </Link>
  );
};

export default FAB;
