import React, { createContext, useReducer } from "react";
import ACTIONS from "./types";
const initialState = {
  allContacts: [],
  isShowLoading: false,
  selectedContact: {},
};
const store = createContext({});
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.TOGGLE_LOADING:
        return {
          ...state,
          isShowLoading: !state.isShowLoading,
        };
      case ACTIONS.GET_ALL_CONTACTS:
        return {
          ...state,
          allContacts: [...action.payload],
          isShowLoading: false,
        };
      case ACTIONS.SET_SELECTED_CONTACT_START:
        return {
          ...state,
          selectedContact: [...action.payload],
          isShowLoading: false,
        };
      case ACTIONS.SET_SELECTED_CONTACT:
        return {
          ...state,
          selectedContact: { ...action.payload },
          isShowLoading: false,
        };
      case ACTIONS.UPDATE_CONTACT:
        return {
          ...state,
          selectedContact: {
            ...state.selectedContact,
            ...action.payload.newData,
          },
          isShowLoading: false,
          allContacts: state.allContacts.map((c) =>
          c.id === action.payload.contactId
          ? { ...c, ...action.payload.newData }
          : { ...c }
          ),
        };
        case ACTIONS.FILTTER_CONTACTS:
          return {
            ...state,

          }

        
        

      default:
        return { ...state };
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
