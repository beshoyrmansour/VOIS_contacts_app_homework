import React, { createContext, useReducer } from "react";
import ACTIONS from "./types";
const initialState = {
  _allContacts: [],
  allContacts: [],
  isShowLoading: false,
  selectedContact: {},
  initials: [],
  filterChar: "",
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
          _allContacts: [...action.payload],
          allContacts: [...action.payload],
          initials: action.payload
            .map((contact) => contact.name.charAt(0))
            .filter(function (item, pos, self) {
              return self.indexOf(item) == pos;
            }),
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
          filterChar: action.payload,
          allContacts: state._allContacts.filter(
            (c) =>
              c.name.charAt(0).toUpperCase() === action.payload.toUpperCase()
          ),
        };
      case ACTIONS.CLEAR_FILTTER_CONTACTS:
        return {
          ...state,
          filterChar: "",
          allContacts: [...state._allContacts],
        };
      case ACTIONS.SEARCH_CONTACTS:
        if (action.payload) {
          let results = [];
          for (var i = 0; i < state._allContacts.length; i++) {
            let contact = state._allContacts[i];
            for (let key in contact) {
              if (
                key in contact &&
                contact[key] !== "id" &&
                contact[key]
                  .toString()
                  .toLowerCase()
                  .indexOf(action.payload.toLowerCase()) != -1
              ) {
                results.push(contact);
              }
            }
          }

          return {
            ...state,
            filterChar: "",
            allContacts: [...results],
          };
        }

      default:
        return { ...state };
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
