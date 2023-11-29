import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
    state = {
        order: 4,
    };

    handleCounterChange = (newValue) => {
        this.setState ({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <h1>ETANEE</h1>
                    </div>
                    <div className="trolley">
                        <img src="https://etanee.id/static/media/basket-blue.937a12ce.svg" alt="" srcset="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
            </Fragment>
        );
    }
}

export default Product;
