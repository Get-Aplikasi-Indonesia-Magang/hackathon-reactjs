import React from 'react';
import { Fragment } from 'react';
import { Component } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cooking-chef-logo-design-template-967f97804c46ad0a0c2f43acacd0a9c5_screen.jpg?ts=1567077737" width={60} alt="" />
          </div>
          <div className="troley">
            <img src="https://cdn.icon-icons.com/icons2/3150/PNG/512/shopping_cart_yellow_icon_192687.png" alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}
export default Product;
