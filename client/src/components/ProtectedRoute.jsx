import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {

  const user = useSelector(selectUser);
  return (
    <Route
      {...rest}
      render={props => {
        if (user && user.admin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          );
        }
      }}
    />
  );
};
