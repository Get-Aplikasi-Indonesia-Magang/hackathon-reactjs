import React, {Component} from "react";

class CardProduct extends Component {
    state =  {
        order: 4,
        name: 'ilmi'
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
                        <img src="https://i.pinimg.com/originals/62/a4/af/62a4afcd2514d0441bceb5a824dd12a2.jpg" alt="product_img" />
                    </div>
                    <p className="product-title">Daging ayam</p>
                    <p className="product-price">Rp 410,000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;