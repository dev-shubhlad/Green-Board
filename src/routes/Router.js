import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "../views/Authontication/Login/Login";
import PrivateRoute from "./privateRoute/PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <PrivateRoute path="/admin" component={Admin} /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
