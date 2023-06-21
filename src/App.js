import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DetailsPage from "./components/DetailsPage";
import NotFound from "./components/NotFound";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/" element={<Landing />} />
          <Route path="/us/*" element={<AboutUs />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
