import React from "react";
import styles from "./Logos.module.css";

import Image9 from "../images/9.jpg";
import Image6 from "../images/6.jpeg";
import Image5 from "../images/5.jpeg";

export default function Logos() {
  return (
    <div className={styles.container}>
      <h3>Who supports us?</h3>
      <div>
        <img src={Image6} alt="logo" />
        <img src={Image5} alt="logo" />
        <img src={Image9} alt="logo" />
      </div>
    </div>
  );
}
