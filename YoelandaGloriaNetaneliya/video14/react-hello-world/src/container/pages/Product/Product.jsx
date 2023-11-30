import React, { Component, Fragment } from "react";
import './Product.css';
import CardProduct from "./CardProduct/CardProduct";
import logo from '../../../images/etane.jpg';


class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div >
                        <img className="logo" src={logo} alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}
export default Product;