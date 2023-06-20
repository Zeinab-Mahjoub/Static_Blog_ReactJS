import React, { Component } from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route to="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
