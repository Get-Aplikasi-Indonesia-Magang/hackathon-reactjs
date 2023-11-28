import React,{Component} from 'react';
import { Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';
import logo from '../../image/etane.jpg';

class Product extends Component {
    state = {
        order: 4,
        name: 'Shela'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img className='logo' src={logo} alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
            <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;