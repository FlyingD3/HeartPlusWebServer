import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Menu from "./pages/menu/Menu";
import NotFound from "./pages/not-found/NotFound";
import About from "./pages/about/About";
import Browser from "./pages/browser/Browser";

import './App.css';
import "./lib/normalize.css";

class App extends Component {
    /* Don't add anything to this class, it's used as routes manager*/
    render() {
      return (
        <Switch>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/app">
            <Redirect to="/" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/browser">
            <Browser />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      );
    };
}

export default App;
