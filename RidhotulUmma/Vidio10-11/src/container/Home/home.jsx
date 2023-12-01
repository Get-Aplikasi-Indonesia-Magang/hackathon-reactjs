import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import BlogPost from "../BlogPost/BlogPost";
import Product from "../Product/Product";
import LifeCycleCop from "../LifeCycleComp/LifeCycleComp";
 import "./home.css";

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: true
            });
        }, 15000);
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<BlogPost />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/lifecycle" element={<LifeCycleCop />} />
                    </Routes>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Home;