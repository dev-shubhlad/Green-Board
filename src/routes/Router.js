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
import { AddCourse } from "../components/forms/addCourse/AddCourse";
import CourseStructure from "../views/CourseStructure/CourseStructure";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/institute" component={Institute} />
        <PrivateRoute
          exact
          path="/institute/course/:courseID"
          component={CourseStructure}
        />
        <PrivateRoute path="/course" component={AddCourse} />
        <PrivateRoute path="/course/:courseID" component={AddCourse} />
        <PrivateRoute path="/user" component={Admin} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
