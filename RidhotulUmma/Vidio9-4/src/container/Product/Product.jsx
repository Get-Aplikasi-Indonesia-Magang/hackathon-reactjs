import React, { Component,Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css';

class Product extends Component {
    state = {
        order: 4,
    }
    hendleCounterChange = (newValue) => {
     this.setState({
        order: newValue
     })
    }
    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <div className="troley">
                        <img src="./assets/cart.png" alt="" />
                   <div className="count">{this.state.order}</div>
                    </div>
                </div>
     
          <CardProduct onCounterChange={(value)=> this.hendleCounterChange(value)}/>
            </Fragment>
        );
    }
}
export default Product;