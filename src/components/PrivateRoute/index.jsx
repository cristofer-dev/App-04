import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, path }) => {
  console.log(path);
  var auth = true;
  return (
    <Route path={path}
      render={() =>
        auth === true ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: path }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
