import axios from "axios";
import React, { Component } from "react";
import Card from "./Card";
import styles from "./Products.module.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      this.setState({
        products: resp.data,
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          products.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              name={item.title}
              cost={item.price}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
