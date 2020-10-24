import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../components/Loading";

const AddNewContact = lazy(() => import("./AddNewContact"));
const AllContacts = lazy(() => import("./AllContacts"));
const EditContact = lazy(() => import("./EditContact"));
const ContactDetails = lazy(() => import("./ContactDetails"));
const NotFound404 = lazy(() => import("./NotFound404"));

const MainRouterIndex = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          exact
          component={AllContacts}
          key="AllContacts"
          path="/"
          name="AllContacts"
        />
        <Route
          exact
          component={AddNewContact}
          key="addNewContact"
          path="/add-new"
          name="AddNewContact"
        />
        <Route
          exact
          component={EditContact}
          key="EditContact"
          path="/:contact_id/edit"
          name="EditContact"
        />
        <Route
          exact
          component={ContactDetails}
          key="ContactDetails"
          path="/:contact_id"
          name="ContactDetails"
        />
        <Route
          component={NotFound404}
          key="not-found-404"
          path="/not-found-404"
          name="not-found-404"
        />
        <Route
          component={NotFound404}
          key="not-found-404"
          path="*"
          name="not-found-404"
        />
      </Switch>
    </Suspense>
  );
};
export default MainRouterIndex;
