import React, { useContext, useEffect } from "react";
import ContactCard from "../components/ContactCard";
import Loading from "../components/Loading";
import { fetchAllContacts } from "../contexts/actions";
import { store } from "../contexts/store";

const AllContacts = () => {
  const { dispatch, state } = useContext(store);
  useEffect(() => {
    fetchAllContacts()(dispatch);
    return () => {};
  }, []);

  return (
    <div className="container">
      <h2 className="vf-title text-center mb-5 pb-2 font-weight-bold">
        Contacts
      </h2>
      <div className="row mb-5 pb-4">
        {state.isShowLoading && state.allContacts.length <= 0 ? (
          <Loading />
        ) : (
          state.allContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllContacts;
