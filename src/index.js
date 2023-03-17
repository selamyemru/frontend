import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/blk-design-system-react.scss";

import AdminLayout from "layouts/Admin/Admin.js";
import PublisherLayout from "layouts/Publisher/Publisher.js";
import ResidentLayout from "layouts/Resident/Resident.js";

import GuestLanding from "./views/landing-page/LandingPage";
import Login from "./views/login/Login";
import AppointmentForm from "./views/appointment-form/AppointmentForm";
import ContactUs from "./views/contact-us/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/resident" render={(props) => <ResidentLayout {...props} />}/>
      <Route path="/publisher" render={(props) => <PublisherLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />}/>
      <Route exact path="/appointment-form" render={(props) => <AppointmentForm {...props} />}/>
      <Route exact path="/contact" render={(props) => <ContactUs {...props} />}/>
      <Route exact path="/" render={(props) => <GuestLanding {...props} />}/>

      <Redirect from="/" to="/" />      
    </Switch>
  </BrowserRouter>
);
