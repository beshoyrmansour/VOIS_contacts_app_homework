import React, { createContext, useReducer } from "react";
import ACTIONS from "./types";
const initialState = {
  allContacts: [],
  isFetchingAllContacts: true,
};
const store = createContext({});
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.GET_ALL_CONTACTS_START:
        return {
          ...state,
          isFetchingAllContacts: true,
        };
      case ACTIONS.GET_ALL_CONTACTS:
        return {
          ...state,
          allContacts: [...action.payload],
          isFetchingAllContacts: false,
        };

      default:
        return { ...state };
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
