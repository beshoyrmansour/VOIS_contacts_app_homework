import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { setSelectedContact } from "../contexts/actions";
import { store } from "../contexts/store";

const ContactCard = ({ contact, ...props }) => {
  const { dispatch, state } = useContext(store);

  return contact ? (
    <div
      className="col-12 col-md-6 col-lg-4 vf-fadein"
      onClick={() => setSelectedContact(contact)(dispatch)}
    >
      <Link
        className="card shadow border-0 mb-4 text-dark text-decoration-none"
        to={`/${contact.id}`}
      >
        {"name" in contact && (
          <h5 className="card-title bg-dark text-white text-center p-3">
            {contact.name}
          </h5>
        )}
        <div className="card-body text-center">
          {"email" in contact && <p className="card-text">{contact.email}</p>}
          {"phone" in contact && <p className="card-text">{contact.phone}</p>}
        </div>
      </Link>
    </div>
  ) : (
    <></>
  );
};

export default ContactCard;
