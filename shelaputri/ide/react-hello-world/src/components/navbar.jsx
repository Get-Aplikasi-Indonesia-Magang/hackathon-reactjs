import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop">My Shoping</span>
                <div className="cart">
                    <span>
                        <i className= "fas fa-cart-plus"></i>
                    </span>
                    <span>0</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;