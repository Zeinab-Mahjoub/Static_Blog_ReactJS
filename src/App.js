import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
      </div>
    );
  }
}
