import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home"
import Clothing from "./Clothing"
import Shoes from "./Shoes"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/clothing" component={Clothing} />
      <Route path="/shoes" component={Shoes} />
    </Switch>
  );
};

export default Routes;
