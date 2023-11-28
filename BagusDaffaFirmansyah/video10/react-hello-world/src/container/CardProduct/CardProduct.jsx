import React from 'react';
import { Fragment } from 'react';
import { Component } from 'react';

class CardProduct extends Component {
  state = {
    order: 4,
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
    if (this.state.order > 0)
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
  };
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="img-thumb-prod">
            <img src="https://www.dapurkobe.co.id/wp-content/uploads/ayam-crispy-belacan.jpg" alt="Logo" />
          </div>
          <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
          <p className="product-price">Rp 150.000</p>
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>
              -
            </button>
            <input type="text" value={this.state.order} />
            <button className="plus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default CardProduct;
