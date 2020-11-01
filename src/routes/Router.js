import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "../views/Authontication/Login/Login";
import Home from "../views/Home";

import PrivateRoute from "./privateRoute/PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
