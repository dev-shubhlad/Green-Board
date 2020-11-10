import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../../assets/images/Logo/GreenBordLOGO.svg";
import Admin from "../../../assets/images/icons/Desktop/Admin_Profile.png"
import Institute from "../../../assets/images/icons/Desktop/My_Institute.png"
import Instructor from "../../../assets/images/icons/Desktop/Instructor_Profile.png"
import Student from "../../../assets/images/icons/Desktop/Student_Profile.png"
import More from "../../../assets/images/icons/Desktop/More.png"

import "./desktopNavbar.css";

const DesktopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand nav-justified" href="#">
          <img
            src={Logo}
            height="42"
            className="d-inline-block align-top"
            alt="GreenBoard"
          />
        </a>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto nav-justified">
            <li className="nav-item">
              <NavLink
                to="/institute"
                className="nav-link d-flex flex-column"
                activeClassName="selected"
              >
                <img
                  src={Institute}
                  style={{ width: "23px", margin: "auto" }}
                />
                <span>Institute</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/instructor"
                exact
                className="nav-link d-flex flex-column"
                activeClassName="selected"
              >
                <img
                  src={Instructor}
                  style={{ width: "23px", margin: "auto" }}
                />
                <span>Instructor</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/student"
                exact
                className="nav-link d-flex flex-column"
                activeClassName="selected"
              >
                <img
                  src={Student}
                  style={{ width: "23px", margin: "auto" }}
                />
                <span>Student</span>
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                to="/user"
                className="nav-link d-flex flex-column"
                activeClassName="selected"
              >
                <img src={Admin} style={{ width: "22px", margin: "auto" }} />
                <span>Admin</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-link d-flex flex-column"
                activeClassName="selected"
              >
                <img
                  src={More}
                  style={{ width: "23px", margin: "auto" }}
                />
                <span>More</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
