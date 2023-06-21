import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>About Us</h1>
      <button onClick={clickHandler}>Go Home</button>
    </div>
  );
};
export default AboutUs;
