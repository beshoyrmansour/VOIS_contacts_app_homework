import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createNewContact } from "../contexts/actions";
import { store } from "../contexts/store";

const AddNewContact = () => {
  const { dispatch, state } = useContext(store);
  const [disableSave, setDisableSave] = useState(true);
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleOnChangeName = (v) => {
    setName(v.target.value);
  };
  const handleOnChangeEmail = (v) => {
    setEmail(v.target.value);
  };
  const handleOnChangePhone = (v) => {
    setPhone(v.target.value);
  };

  const handleSaveContact = () => {
    console.log("handleSaveContact");
    createNewContact({
      name: name,
      email: email,
      phone: phone,
    })(dispatch);
    history.push(`/`);
  };

  useEffect(() => {
    setDisableSave(!(name !== "" && email !== "" && phone !== ""));
    return () => {};
  }, [name, email, phone]);

  return (
    <div>
      <h2 className="vf-title text-center mb-5 pb-2 font-weight-bold">
        Add New Contact
      </h2>
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2 ">
          <div className="form-group row mb-4 ">
            <label
              htmlFor="inputPassword3"
              className="col-12  py-1 col-form-label text-muted  font-weight-normal"
            >
              Name <span className="d-none d-sm-inline">:</span>
            </label>
            <div className="col-12  py-1 text-center text-sm-left">
              <input
                type="text"
                className="form-control"
                id="inputPassword3"
                placeholder="Enter Name"
                value={name}
                onChange={handleOnChangeName}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 offset-lg-2 ">
          <div className="form-group row mb-4 ">
            <label
              htmlFor="inputPassword3"
              className="col-12  py-1 col-form-label text-muted  font-weight-normal"
            >
              E-mail <span className="d-none d-sm-inline">:</span>
            </label>
            <div className="col-12  py-1 text-center text-sm-left">
              <input
                type="text"
                className="form-control"
                id="inputPassword3"
                placeholder="Enter E-mail"
                value={email}
                onChange={handleOnChangeEmail}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 offset-lg-2 ">
          <div className="form-group row mb-4 ">
            <label
              htmlFor="inputPassword3"
              className="col-12  py-1 col-form-label text-muted  font-weight-normal"
            >
              Phone <span className="d-none d-sm-inline">:</span>
            </label>
            <div className="col-12  py-1 text-center text-sm-left">
              <input
                type="text"
                className="form-control"
                id="inputPassword3"
                placeholder="Enter Phone"
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
            disabled={disableSave}
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewContact;
