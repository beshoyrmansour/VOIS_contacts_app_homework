import React, { useContext } from "react";
import { store } from "../contexts/store";
import { applyCharFilter, clearCharFilter } from "../contexts/actions";

const Filters = () => {
  const { dispatch, state } = useContext(store);

  const handleFilter = (char) => {
    state.filterChar === char
      ? clearCharFilter()(dispatch)
      : applyCharFilter(char)(dispatch);
  };
  return state.initials.length ? (
    <ul className="nav nav-fill justify-content-center mb-2 ">
      {state.initials.map((char) => (
        <li
          className={`text-uppercase nav-item mx-3 h3 ${
            state.filterChar === char ? "text-fv activeFilter" : "text-dark"
          } `}
          key={char}
          onClick={() => handleFilter(char)}
        >
          {char}
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};

export default Filters;
