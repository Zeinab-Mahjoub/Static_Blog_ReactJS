import React, { Component } from "react";
import styles from "./Card.module.css";
import DownArrowSVG from "../images/arrow-down-md-svgrepo-com.svg";
import UpArrowSVG from "../images/arrow-up-md-svgrepo-com.svg";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  arrowDownHandler = () => {
    if (this.state.counter === 0) return;
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  arrowUpHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;

    return (
      <div className={styles.container}>
        <img src={image} alt="cottage" />
        <div>
          <h3>{name}</h3>
          <p>{counter ? `${+cost.split(" ")[0] * counter} US$` : cost}</p>
        </div>
        <div className={styles.counter}>
          <img
            className={!counter ? styles.deactivated : ""}
            src={DownArrowSVG}
            alt="arrow-down"
            onClick={this.arrowDownHandler}
          />
          <span>{counter}</span>
          <img src={UpArrowSVG} alt="arrow-up" onClick={this.arrowUpHandler} />
        </div>
      </div>
    );
  }
}
