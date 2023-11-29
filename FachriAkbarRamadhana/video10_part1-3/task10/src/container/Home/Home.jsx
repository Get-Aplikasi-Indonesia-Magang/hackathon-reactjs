//library
import React, {Component } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

//pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';

//style
import './Home.css';



class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)   
    }

    render(){
        return (
            <BrowserRouter>
                    <div className='navigation'>
                        <Link to='/'>Blog Post</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/lifecycle'>Lifecycle</Link>
                        <Link to='/youtube-component'>Youtube</Link>
                    </div>
                <Routes>
                    <Route path="/" element={<BlogPost />} />
                    <Route path="/lifecycle" element={<LifeCycleComp />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/youtube-component" element={<YoutubeCompPage />} />
                </Routes>
            </BrowserRouter>  
        )
    }
}

export default Home;