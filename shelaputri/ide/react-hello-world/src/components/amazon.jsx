import React from 'react';
import list from '../data';
import Cards from "./card";
import '../styles/amazon.css';
import { useState } from 'react';

const Amazon = () => {
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        setCart([...cart,item]);
        console.log(cart);
    }

    return (
       <section> 
            {
                list.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick}/>
            ))}
            
       </section>
    );
}

export default Amazon;