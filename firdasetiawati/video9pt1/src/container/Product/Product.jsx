import React, { Component, Fragment } from "react";
import './Product.css';
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component{
    state= {
        order  : 4,
        name: 'Firda'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://i.pinimg.com/564x/5d/85/4a/5d854ab450ab7c96db812b3b49ac9cd5.jpg" alt="logo" />
                    </div>
                    <div className="troley">
                        <img src="https://www.pngplay.com/wp-content/uploads/7/Cart-Logo-Transparent-Background.png" alt="keranjang" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;