import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import BlogPost from "../pages/BlogPost/BlogPost";
import Product from "../pages/Product/Product";
import LifeCycleCop from "../pages/LifeCycleComp/LifeCycleCop";
import YtComp from "../pages/YoutubeComp/YtComp";

import "./Home.css";

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
                        <Link to="/YtComp">YtComp</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<BlogPost />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/lifecycle" element={<LifeCycleCop />} />
                        <Route path="/YtComp" element={<YtComp />} />
                    </Routes>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default Home;