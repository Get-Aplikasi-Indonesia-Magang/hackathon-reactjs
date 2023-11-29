import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://asset-a.grid.id/photo/2020/12/10/436796054.jpg" alt="product_image" />
                </div>
                <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                <p className="product-price">Rp 410,000</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)}/>
            </div>
        )
    }
}

export default CardProduct;