import API_ENDPOINTS from "../constatns/api_end_points";
import ACTIONS from "./types";

export const fetchAllContacts = () => (dispatch) => {
  dispatch({ type: ACTIONS.TOGGLE_LOADING });
  fetch(API_ENDPOINTS.USERS).then((res) =>
    res.json().then((data) => {
      dispatch({ type: ACTIONS.GET_ALL_CONTACTS, payload: data });
    })
  );
};

export const setSelectedContact = (selectedContact) => (dispatch) => {
  dispatch({ type: ACTIONS.SET_SELECTED_CONTACT, payload: selectedContact });
};
export const fetchContactDetails = (id) => (dispatch) => {
  dispatch({ type: ACTIONS.TOGGLE_LOADING });
  return fetch(`${API_ENDPOINTS.USERS}/${id}`).then((res) =>
    res
      .json()
      .then((data) => {
        dispatch({ type: ACTIONS.SET_SELECTED_CONTACT, payload: data });
        return data;
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.TOGGLE_LOADING });
      })
  );
};

export const updateContact = (contactId, newData) => (dispatch) => {
  return dispatch({
    type: ACTIONS.UPDATE_CONTACT,
    payload: { contactId, newData },
  });
};

export const applyCharFilter = (char) => (dispatch) => {
  return dispatch({
    type: ACTIONS.FILTTER_CONTACTS,
    payload: char,
  });
};
export const clearCharFilter = () => (dispatch) => {
  return dispatch({
    type: ACTIONS.CLEAR_FILTTER_CONTACTS,
  });
};
export const createNewContact = (newContactData) => (dispatch) => {
  return dispatch({
    type: ACTIONS.CREATE_NEW_CONTACT,
    payload: newContactData,
  });
};
export const searchContacts = (query) => (dispatch) => {
  return dispatch({
    type: ACTIONS.SEARCH_CONTACTS,
    payload: query,
  });
};
