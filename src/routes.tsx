import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import ProtectedRoute from "./ProtectedRoute";

const Routes: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState({ value: "" });
  return (
    <Switch>
      <Route
        path="/auth"
        component={() => (
          <Auth setIsAuth={setIsAuth} setUserName={setUserName} />
        )}
      />
      <ProtectedRoute
        isAuth={isAuth}
        path="/"
        component={() => <Home userName={userName} />}
      />
    </Switch>
  );
};

export default Routes;
