import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import PrivateRoute from "Common/PrivateRoute";
import Login from "components/Authentication/Login";
import SignUp from "components/Authentication/SignUp";
import Dashboard from "components/Dashboard";
import Navbar from "components/Navbar";
import { useAuth } from "contexts/auth";

const Main = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact component={SignUp} path="/signup" />
        <Route exact component={Login} path="/login" />
        <PrivateRoute
          component={Dashboard}
          condition={isLoggedIn}
          path="/"
          redirectRoute="/login"
        />
      </Switch>
    </Router>
  );
};

export default Main;
