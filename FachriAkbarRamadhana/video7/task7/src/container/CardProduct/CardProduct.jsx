import React from "react";
import { Component } from "react";

class CardProduct extends Component {
    state = {
        order: 4,
        name: 'pitik' 
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => { 
        this.handleCounterChange(this.state.order);
        }) 
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => { 
            this.handleCounterChange(this.state.order);
            })
        }
    }


    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://down-id.img.susercontent.com/file/bc5d18ba1af830ebf381e0f2b369f3d4" alt="product_image" />
                </div>
                <p className="product-title">Ayam Broiler 1Kg</p>
                <p className="product-price">Rp.41.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div> 
        );
    }
}

export default CardProduct;