import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import Institute from "../../../assets/images/icons/Mobile/MyinstituteWhiteicon.svg";
import Admin from "../../../assets/images/icons/Mobile/AdminiconWhite.svg";
import Instructor from "../../../assets/images/icons/Mobile/Instructoricon(greenBackground).svg";
import Student from "../../../assets/images/icons/Mobile/StudentprofileWhiteicon.svg";
import More from "../../../assets/images/icons/Desktop/Moreblackish.svg";

import "./mobileNavbar.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#0FBC71",
    color: "white",
    height: "74px",
    width: "100%",
    position: "fixed",
    bottom: 0,
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
        to="/"
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
        to="/"
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
            style={{ width: "26.64px" }}
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
  );
};
