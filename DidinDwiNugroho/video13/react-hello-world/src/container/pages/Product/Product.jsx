import React from "react";
import { Fragment, Component } from "react";
import "./Product.css";
import CardProduct from "./CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 3,
    name: "Nugroho",
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Product Page</h1>
        <hr />
        <div className="header">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="troley">
            <img
              src="https://cdn.icon-icons.com/icons2/1391/PNG/512/troley_96344.png"
              alt=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;
