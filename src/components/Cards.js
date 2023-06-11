import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import Image1 from "../images/1.jpg";
import Image3 from "../images/3.webp";
import Image6 from "../images/6.jpeg";
import Image5 from "../images/5.jpeg";

export default class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={Image5} name="House of Love" cost="12000$US" />
        <Card image={Image1} name="Fairytale Tree Cottage" cost="11000$US" />
        <Card image={Image6} name="Modern Hill Mansion" cost="124000$US" />
        <Card image={Image3} name="Sweet Cottage by Lake" cost="9690$US" />
      </div>
    );
  }
}
