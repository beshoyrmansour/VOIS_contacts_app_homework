import React, { createContext, useReducer } from "react";
import ACTIONS from "./types";
const initialState = {
  allContacts: [],
};
const store = createContext({});
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.GET_ALL_CONTACTS:
        return {
          ...state,
          allContacts: [...action.payload],
        };

      default:
        return { ...state };
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
