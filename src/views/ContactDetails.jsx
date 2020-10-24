import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { fetchContactDetails } from "../contexts/actions";
import { store } from "../contexts/store";
import ACTIONS from "../contexts/types";

const ContactDetails = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  let { contact_id } = useParams();
  const history = useHistory();

  const { dispatch, state } = useContext(store);
  const handleDeleteContact = () => {
    console.log("handleDeleteContact");
  };
  const handleEditContact = () => {
    console.log("handleEditContact");
    history.push(`/${contact_id}/edit`);
  };

  useEffect(() => {
    if (contact_id !== "") {
      if (
        !(
          "id" in state.selectedContact &&
          state.selectedContact.id === contact_id
        )
      ) {
        fetchContactDetails(contact_id)(dispatch).then((res) => {
          if (Object.keys(res).length === 0) {
            history.push("/");
          }
        });
      }
    } else {
      history.push("/");
    }

    return () => {};
  }, [contact_id]);

  return (
    <div className="container">
      {"id" in state.selectedContact ? (
        <>
          {"name" in state.selectedContact ? (
            <h2 className="vf-title text-center mb-5 pb-2 font-weight-bold">
              {state.selectedContact.name}'s Profile
            </h2>
          ) : (
            <></>
          )}
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-1">
              <div className="form-group row mb-4 ">
                <label
                  htmlFor="inputPassword3"
                  className="col-12 col-sm-6 py-1 text-center col-form-label text-sm-right text-muted  font-weight-normal "
                >
                  Name <span className="d-none d-sm-inline">:</span>
                </label>
                <div className="col-12 col-sm-6 py-1 text-center text-sm-left">
                  <p className="m-0">{state.selectedContact.name}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 offset-lg-1">
              <div className="form-group row mb-4 ">
                <label
                  htmlFor="inputPassword3"
                  className="col-12 col-sm-6 py-1 text-center col-form-label text-sm-right text-muted  font-weight-normal "
                >
                  E-mail <span className="d-none d-sm-inline">:</span>
                </label>
                <div className="col-12 col-sm-6 py-1 text-center text-sm-left">
                  <p className="m-0 text-fv">{state.selectedContact.email}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 offset-lg-1">
              <div className="form-group row mb-4 ">
                <label
                  htmlFor="inputPassword3"
                  className="col-12 col-sm-6 py-1 text-center col-form-label text-sm-right text-muted  font-weight-normal "
                >
                  Phone <span className="d-none d-sm-inline">:</span>
                </label>
                <div className="col-12 col-sm-6 py-1 text-center text-sm-left">
                  <p className="m-0 text-fv">{state.selectedContact.phone}</p>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button
                onClick={handleDeleteContact}
                className="btn btn-outline-vf mb-2 mx-3 px-4"
              >
                Delete
              </button>
              <button
                onClick={handleEditContact}
                className="btn btn-outline-dark mb-2 mx-3 px-4"
              >
                Edit
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ContactDetails;
