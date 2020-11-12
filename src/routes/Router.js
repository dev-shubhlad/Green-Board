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
import Instructor from "../views/Instructor/InstructorList/Instructor";
import InstructorProfile from "../views/Instructor/InstructorProfile/InstructorProfile";
import Student from "../views/Student/StudentList/Student";
import StudentProfile from "../views/Student/StudentProfile/StudentProfile";
import { Signup } from "../views/Authontication/SignUp/Signup";
import { ForgetPassword } from "../views/Authontication/ForgetPassword/ForgetPassword";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup}/>
        <Route path="/forget-password" component={ForgetPassword} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/institute" component={Institute} />
        <PrivateRoute
          exact
          path="/institute/course/:courseID"
          component={CourseStructure}
        />
        <PrivateRoute path="/course" component={AddCourse} />
        <PrivateRoute path="/course/:courseID" component={AddCourse} />
        <PrivateRoute exact path="/instructor" component={Instructor} />
        <PrivateRoute
          path="/instructor/:intructorID"
          component={InstructorProfile}
        />
        <PrivateRoute exact path="/student" component={Student} />
        <PrivateRoute path="/student/:studentID" component={StudentProfile} />
        <PrivateRoute path="/user" component={Admin} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
