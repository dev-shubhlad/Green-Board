import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

import Institute from "../../../assets/images/icons/Mobile/My_Institute.png";
import Admin from "../../../assets/images/icons/Mobile/Admib_Profile.png";
import Instructor from "../../../assets/images/icons/Mobile/Instructor_Profile.png";
import Student from "../../../assets/images/icons/Mobile/Student_Profile.png";
import More from "../../../assets/images/icons/Mobile/More.png";

import "./mobileNavbar.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#0FBC71",
    color: "white",
    height: "74px",
    maxWidth: "100%",
    position: "fixed",
    bottom: 0,
    width: "100%",
    fontSize: ".53rem",
    fontWeight: "500",
    textDecoration: "none",
    zIndex: 9999,
  },
});

const useActionStyle = makeStyles({
  root: {
    color: "white",
    padding: 0,
    "&:hover": {
      textDecoration: "none",
    },
    minWidth: 0,
  },
  selected: {
    color: "black",
  },
  label: {
    fontSize: "600",
  },
});

export const MobileNavbar = () => {
  const classes = useStyles();
  const actionClasses = useActionStyle();
  const [value, setValue] = React.useState(0);

  return (
    <ScopedCssBaseline>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        classes={classes}
      >
        <BottomNavigationAction
          component={Link}
          to="/institute"
          classes={actionClasses}
          label="Institute"
          icon={
            <img
              src={Institute}
              className={classnames({
                "selected-tab": value === 0,
                "nonselect-tab": value !== 0,
              })}
              style={{ width: "34px" }}
            />
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/instructor"
          classes={actionClasses}
          label="Instructor"
          icon={
            <img
              src={Instructor}
              className={classnames({
                "selected-tab": value === 1,
                "nonselect-tab": value !== 1,
              })}
              style={{ width: "34px" }}
            />
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/student"
          classes={actionClasses}
          label="Student"
          icon={
            <img
              src={Student}
              className={classnames({
                "selected-tab": value === 2,
                "nonselect-tab": value !== 2,
              })}
              style={{ width: "34px" }}
            />
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/user"
          classes={actionClasses}
          label="Admin"
          icon={
            <img
              src={Admin}
              className={classnames({
                "selected-tab": value === 3,
                "nonselect-tab": value !== 3,
              })}
              style={{ width: "34px" }}
            />
          }
        />
        <BottomNavigationAction
          component={Link}
          to="/"
          classes={actionClasses}
          label="More"
          icon={
            <img
              src={More}
              className={classnames({
                "selected-tab": value === 4,
                "nonselect-tab": value !== 4,
              })}
              style={{ width: "34px" }}
            />
          }
        />
      </BottomNavigation>
    </ScopedCssBaseline>
  );
};
