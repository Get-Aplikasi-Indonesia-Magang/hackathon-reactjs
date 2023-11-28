import React, { Component } from "react"
import assets from "../../assets";

class CardProduct extends Component{
    state = {
        order: 1,
        name:"Bayu"
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
                        <img src={assets.image2} alt="product_img"/>
                    </div>
                    <p className="product-title">Pork Belly</p>
                    <p className="product-price">Rp 136,000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct