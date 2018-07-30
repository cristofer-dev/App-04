import React from "react";
import { Route } from "react-router-dom";

import Home from "../Home"
import Dashboard from "../Dashboard"
import Profile from "../Profile"
import PrivateRoute from "../PrivateRoute"
import Login from "../Login"

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/profile" component={Profile}/>
    </div>
  );
};

export default App;
