import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../../assets/images/Logo/GreenBordLOGO.svg";
import Institute from "../../../assets/images/icons/Desktop/MyinstituteBlakish.svg";
import Admin from "../../../assets/images/icons/Desktop/Adminblackish.svg";
import Instructor from "../../../assets/images/icons/Desktop/InstructorProfileblakish.svg";
import Student from "../../../assets/images/icons/Desktop/Studentblackish.svg";

import "./desktopNavbar.css";

const DesktopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <li className="nav-item active">
              <NavLink
                to="/home"
                className="nav-link d-flex flex-column"
                activeClassName="selected"
              >
                <img
                  src={Institute}
                  style={{ width: "23px", margin: "auto" }}
                />
                <span>Institute</span>
                <span className="sr-only">(current)</span>
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
                  src={Instructor}
                  style={{ width: "23px", margin: "auto" }}
                />
                <span>Instructor</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/home" className="nav-link d-flex flex-column">
                <img src={Student} style={{ width: "23px", margin: "auto" }} />
                <span>Student</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/home" className="nav-link d-flex flex-column">
                <img src={Admin} style={{ width: "18px", margin: "auto" }} />
                <span>Admin</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/home" className="nav-link d-flex flex-column">
                <img
                  src={Institute}
                  style={{ width: "23px", margin: "auto" }}
                />
                <span>Institute</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
