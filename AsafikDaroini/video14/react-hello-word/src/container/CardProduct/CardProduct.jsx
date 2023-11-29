import React from "react";
import { Component } from "react";

class CardProduct extends Component {
  state = {
    order: 3,
    name: "Nugroho",
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://media.istockphoto.com/id/583848484/id/foto/sayap-ayam-roti-goreng-dalam-pedas.webp?s=1024x1024&w=is&k=20&c=TdDs_neWxwmolHKypQW7i7LTP4L6qJzpH_vhwti9Wi8="
            alt="product_image"
          />
        </div>
        <p className="product-title">
          Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Cartoon - 10
          Pack]
        </p>
        <p className="product-price">Rp 410.000</p>
        <div className="conter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
