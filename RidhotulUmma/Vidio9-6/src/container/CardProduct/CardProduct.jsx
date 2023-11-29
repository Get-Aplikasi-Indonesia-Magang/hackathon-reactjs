import React, { Component } from "react";

class CardProduct extends Component {
    state = {
        order: 4,
    }
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
   }
    handlePlus = () => {
         this.setState({
            order: this.state.order + 1
         }, () => {
            this.handleCounterChange(this.state.order);
         }
         )
    }
    handleMinus  = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
             }, () => {
                this.handleCounterChange(this.state.order);
             }
             )   
        }
      
    }
    render(){
        return(
       
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2PPfJExLQOkNNs3EbPxSkOv6dqTj_ihhVw&usqp=CAU" alt="product-image" />
                </div>
                <p className="product-title">Bakso</p>
          <p className="product-price">Rp 15.000</p>
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