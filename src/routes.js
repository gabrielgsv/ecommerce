import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Clothing from "./pages/Clothing";
import Shoes from "./pages/Shoes";

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/clothing" component={Clothing} />
        <Route path="/shoes" component={Shoes} />
      </Switch>
    </>
  );
};

export default Routes;
