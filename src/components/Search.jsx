import React, { useContext, useEffect, useState } from "react";
import { store } from "../contexts/store";
import ACTIONS from "../contexts/types";

import { searchContacts } from "../contexts/actions";
import { useHistory, useLocation } from "react-router-dom";
const Search = () => {
  const { dispatch, state } = useContext(store);
  const location = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState("");
  const handleSearchSubmit = () => {
    if (query !== "") {
      if (location.pathname !== "/") history.push("/");
      searchContacts()(dispatch);
      dispatch({
        type: ACTIONS.SEARCH_CONTACTS,
        payload: query,
      });
    } else {
      dispatch({
        type: ACTIONS.CLEAR_FILTTER_CONTACTS,
      });
    }
  };

  return (
    <form
      className="form-inline d-flex flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearchSubmit();
      }}
    >
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        title="search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
