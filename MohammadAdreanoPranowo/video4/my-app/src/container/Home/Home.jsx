import React, {Component} from "react";
import Product from "../Pages/Product/Product";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../Pages/BlogPost/BlogPost";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import './Home.css';
import YoutubeCompPage from "../Pages/YoutubeCompPage/YoutubeCompPage";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";

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
                        <Link to="/youtube" >Youtube</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<BlogPost />} />
                        <Route path="/detail-post/:postId" element={<DetailPost />}/>
                        <Route path="/lifecycle" element={<LifeCycleComp />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/youtube" element={<YoutubeCompPage />} />
                    </Routes>
                </div>
        </BrowserRouter>
        )
    }
}

export default Home;