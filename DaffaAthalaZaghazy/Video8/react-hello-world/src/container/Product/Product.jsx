import React, { Component, Fragment } from "react";
import './Product.css'
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
    state = {
        order: 4
    }
    
    HandleCounterChange =(newValue) => {
        this.setState({
            order: newValue
        })

    }





    
    render(){
        return(
            <Fragment>
<div className="header">
    <div className="logo">
    <img src="data:image/png;base64,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" alt=""/>

    </div>
    <div className="troley"> 
    <img src="https://i.pinimg.com/564x/6c/2d/cf/6c2dcf83b8c808d92fda0f32d199da3a.jpg" alt=""/>
    <div className="count">{this.state.order}</div> 
    </div>
</div>

            <CardProduct onCounterChange={(value)=> this.HandleCounterChange(value)}/>
            </Fragment>
        );
    }

}

export default Product;