import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, ...props }) => {
  return contact ? (
    <div className="col-12 col-md-6 col-lg-4 ">
      <Link
        className="card shadow border-0 mb-4 text-dark text-decoration-none"
        to={`/${contact.username}`}
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
