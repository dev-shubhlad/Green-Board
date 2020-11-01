import React from "react";
import { Redirect, Route } from "react-router-dom";
import Navbar from "../../views/Authontication/Navbar/Navbar";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     localStorage.getItem("authToken") ? (
    //       <>
    //         <Navbar />
    //         <Component {...props} />
    //       </>
    //     ) : (
    //       <Redirect
    //         to={{
    //           pathname: "/login",
    //           state: { from: props.location },
    //         }}
    //       />
    //     )
    //   }
    // />

    <Route
      {...rest}
      render={(props) =>
        true ? (
          <>
            <Navbar />
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
