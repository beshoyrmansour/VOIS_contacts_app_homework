import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { fetchContactDetails, updateContact } from "../contexts/actions";
import { store } from "../contexts/store";

const EditContact = (props) => {
  const { dispatch, state } = useContext(store);
  let { contact_id } = useParams();
  let history = useHistory();

  const [name, setName] = useState(
    "name" in state.selectedContact ? state.selectedContact.name : ""
  );
  const [email, setEmail] = useState(
    "email" in state.selectedContact ? state.selectedContact.email : ""
  );
  const [phone, setPhone] = useState(
    "phone" in state.selectedContact ? state.selectedContact.phone : ""
  );

  const handleSaveContact = () => {
    updateContact(contact_id, {
      name: name,
      email: email,
      phone: phone,
    })(dispatch);
    history.push(`/${contact_id}`);
  };

  const handleOnChangeName = (v) => {
    setName(v.target.value);
  };
  const handleOnChangeEmail = (v) => {
    setEmail(v.target.value);
  };
  const handleOnChangePhone = (v) => {
    setPhone(v.target.value);
  };

  useEffect(() => {
    if ("id" in state.selectedContact) {
      setName(state.selectedContact.name);
      setEmail(state.selectedContact.email);
      setPhone(state.selectedContact.phone);
    }
    return () => {};
  }, [state.selectedContact]);

  useEffect(() => {
    if (contact_id) {
      if (
        !(
          "id" in state.selectedContact &&
          state.selectedContact.id == contact_id
        )
      ) {
        fetchContactDetails(contact_id)(dispatch);
      }
    } else {
      history.push("/");
    }

    return () => {};
  }, []);

  return (
    <div className="container">
      {"id" in state.selectedContact ? (
        <>
          {"name" in state.selectedContact ? (
            <h2 className="vf-title text-center mb-5 pb-2 font-weight-bold">
              Edit {state.selectedContact.name}'s Profile
            </h2>
          ) : (
            <></>
          )}
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-1 ">
              <div className="form-group row mb-4 ">
                <label
                  htmlFor="inputPassword3"
                  className="col-12 col-sm-6 py-1 text-center col-form-label text-sm-right text-muted  font-weight-normal"
                >
                  Name <span className="d-none d-sm-inline">:</span>
                </label>
                <div className="col-12 col-sm-6 py-1 text-center text-sm-left">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Name"
                    value={name}
                    onChange={handleOnChangeName}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 offset-lg-1 ">
              <div className="form-group row mb-4 ">
                <label
                  htmlFor="inputPassword3"
                  className="col-12 col-sm-6 py-1 text-center col-form-label text-sm-right text-muted  font-weight-normal"
                >
                  E-mail <span className="d-none d-sm-inline">:</span>
                </label>
                <div className="col-12 col-sm-6 py-1 text-center text-sm-left">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleOnChangeEmail}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 offset-lg-1 ">
              <div className="form-group row mb-4 ">
                <label
                  htmlFor="inputPassword3"
                  className="col-12 col-sm-6 py-1 text-center col-form-label text-sm-right text-muted  font-weight-normal"
                >
                  Phone <span className="d-none d-sm-inline">:</span>
                </label>
                <div className="col-12 col-sm-6 py-1 text-center text-sm-left">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Phone"
                    value={phone}
                    onChange={handleOnChangePhone}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button
                onClick={handleSaveContact}
                className="btn btn-outline-dark mb-2 mx-3 px-4"
              >
                Save Contact
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

export default EditContact;
