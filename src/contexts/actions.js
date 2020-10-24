import API_ENDPOINTS from "../constatns/api_end_points";
import ACTIONS from "./types";

export const fetchAllContacts = () => (dispatch) => {
  dispatch({ type: ACTIONS.GET_ALL_CONTACTS_START });
  fetch(API_ENDPOINTS.USERS).then((res) =>
    res.json().then((data) => {
      dispatch({ type: ACTIONS.GET_ALL_CONTACTS, payload: data });
    })
  );
};
