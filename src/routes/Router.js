import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login } from "../views/Authontication/Login/Login";
import Admin from "../views/Admin/Admin";
import Home from "../views/Home";

import PrivateRoute from "./privateRoute/PrivateRoute";
import Institute from "../views/Institute/Institute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/institute" component={Institute} />
        <PrivateRoute path="/user" component={Admin} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
