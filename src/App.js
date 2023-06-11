import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
      </div>
    );
  }
}
