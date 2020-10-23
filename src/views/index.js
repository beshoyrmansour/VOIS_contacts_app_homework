import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
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
          path="/edit/:contact_id"
          name="EditContact"
        />
        <Route
          exact
          component={ContactDetails}
          key="ContactDetails"
          path="/:contact_id"
          name="ContactDetails"
        />
        <Route component={NotFound404} key="404" path="*" name="404" />
      </Switch>
    </Suspense>
  );
};
export default MainRouterIndex;
