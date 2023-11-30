import React from "react";
import { Component } from "react";

class CardProduct extends Component {
    state = {
        order: 4
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

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://down-id.img.susercontent.com/file/f94fd5b091392dbc6789ede5e5b2fbc0" alt="" />
                </div>
                <p className="product-title">Daging Ayam Berbumbu</p>
                <p className="product-price">Rp. 410,000</p>
                <div className="counter">
                    <button onClick={this.handleMinus} className="minus">-</button>
                    <input type="text" value={this.state.order}/>
                    <button onClick={this.handlePlus} className="plus">+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;