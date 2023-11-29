import React, {Component} from "react";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import './Home.css';

class Home extends Component{
    
    state = {
        showComponent: true
    }

    render(){
        return(
        <BrowserRouter>
                <div className="CardComp">
                    <div className="navigation">
                        <Link to="/" >Blog Post</Link>
                        <Link to="/product" >Product</Link>
                        <Link to="/lifecycle" >LifeCycle</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<BlogPost />} />
                        <Route path="/lifecycle" element={<LifeCycleComp />} />
                        <Route path="/product" element={<Product />} />
                    </Routes>
                </div>
        </BrowserRouter>
        )
    }
}

export default Home;