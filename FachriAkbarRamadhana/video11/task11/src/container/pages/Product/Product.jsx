import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import './Product.css';
import CardProduct from "./CardProduct/CardProduct";

class Product extends Component {
    state = {
        order: 4,
        name: 'pitik' 
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Produk</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt="" />
                    </div>
                    <div className="trolley">
                        <img src="" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
            
        );
    }
}

export default Product;