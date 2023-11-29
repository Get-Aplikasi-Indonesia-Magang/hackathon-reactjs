import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        });
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://pbs.twimg.com/profile_images/1166936909815283713/a9jQXmx0_400x400.jpg" alt="" />
                    </div>
                    <div className="trole">
                        <img src="" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default Product;