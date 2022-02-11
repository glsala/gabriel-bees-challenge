import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  isAuth: boolean;
}

const ProtectedRoute: React.FC<Props> = ({ isAuth, ...routeProps }) => {
  if (isAuth) {
    return <Route {...routeProps} />;
  }
  return <Redirect to="/auth" />;
};

export default ProtectedRoute;
