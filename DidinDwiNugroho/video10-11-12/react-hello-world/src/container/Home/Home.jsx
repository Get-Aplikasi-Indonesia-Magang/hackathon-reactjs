import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import BlogPost from "../pages/BlogPost/BlogPost";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import "./Home.css";

class Home extends Component {
  state = {
    showComponent: true,
  };

  render() {
    return (
      <Router>
        <div className="navigate">
          <Link to="/">Blog Post</Link>
          <Link to="/product">Product</Link>
          <Link to="/lifecycle">LifeCycle</Link>
          <Link to="/youtube-component">Youtube</Link>
        </div>
        <Routes>
          <Route path="/" element={<BlogPost />} />
          <Route path="/product" element={<Product />} />
          <Route path="/lifecycle" element={<LifeCycleComp />} />
          <Route path="/youtube-component" element={<YoutubeCompPage />} />
        </Routes>
      </Router>
    );
  }
}

export default Home;
