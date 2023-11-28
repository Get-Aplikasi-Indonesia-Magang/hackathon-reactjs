import React, { Component } from "react";

class CardProduct extends Component {
    state = {
        order: 4
    }
    
    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }
    


    
    handlePlus = () =>{
    this.setState({
        order: this.state.order + 1
    }, ()=> {
        this.handleCounterChange(this.state.order);
    })


    
    }

    handleMinus = () =>{
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
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                </div>
                <p className="product-title">nasi goreng rasa sapi lada putih dari amerika dan swedia</p>
                <p className="product-price"> Rp. 500.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}/> 
                    <button className="minus" onClick={this.handlePlus}>+</button>
                </div>

            </div>
        );
    }

}

export default CardProduct;