import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Landing />} />
          <Route path="/us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
