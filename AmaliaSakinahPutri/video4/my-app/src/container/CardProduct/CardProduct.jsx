import React, {Component} from 'react';
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
        if (this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);    
            })  
        }
        
    }

    render() {
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="data:image/jpeg;base64,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" alt="product_image" />
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original Plus Tepung Crispy [1 carton - 10 Pack]</p>
                <p className="product-price">Rp. 410,000</p>
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