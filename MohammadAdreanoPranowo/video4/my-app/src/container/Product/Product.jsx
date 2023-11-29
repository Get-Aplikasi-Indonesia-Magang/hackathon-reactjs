import React, { Component, Fragment } from "react";
import './Product.css';
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component{

    state = {
        order : 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order : newValue
        })
    }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/static/media/xfood-logo-blue-login.6ec62d26.png" width="100px" height="100px" alt="logo" />
                    </div>
                    <div className="troley">
                        <img src="data:image/png;base64,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" alt="troli_img" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
            
        );
    }
}

export default Product;