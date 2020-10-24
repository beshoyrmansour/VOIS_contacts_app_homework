import React from "react";

const ContactCard = ({ contact, ...props }) => {
  return contact ? (
    <div className="col-12 col-md-6 col-lg-4 ">
      <div className="card shadow border-0 mb-4">
        {"name" in contact && (
          <h5 className="card-title bg-dark text-white text-center p-3">
            {contact.name}
          </h5>
        )}
        <div className="card-body text-center">
          {"email" in contact && <p className="card-text">{contact.email}</p>}
          {"phone" in contact && <p className="card-text">{contact.phone}</p>}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ContactCard;
