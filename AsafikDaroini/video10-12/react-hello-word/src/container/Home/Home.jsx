//Libaris
import React, { Component } from "react";
import {
  BrowserRouter as Router, Routes,Route, Link
} from "react-router-dom";

//pages
import Product from "../Page/Product/Product";
import LifeCycleComp from "../Page/LifeCycleComp/LifeCycleComp";
import BlogPost from '../Page/BlogPost/BlogPost'
import Youtube from "../Page/YouTubeComp/Youtube";
import DetailPost from '../Page/BlogPost/DetailPost/DetailPost'

//css
import './Navigations.css'




class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }

  render() {
    return (
      <Router>
            <div className='navigations'>
              <Link to='/'>Blog Spot</Link>
              <Link to='/product'>Product</Link>
              <Link to='/lifecycle'>Lifecycle</Link>
              <Link to='/youtube'>Youtube</Link>
        </div>
        <Routes>
          
       
        
            <Route path="/" Component={BlogPost}/>
            <Route path="/product" Component={Product}/>
            <Route path="/lifecycle" Component={LifeCycleComp}/>
            <Route path="/youtube" Component={Youtube}/>
            <Route path="/detail-post/:id" Component={DetailPost} />
        </Routes>
      </Router>
      
    );
  }
}

export default Home;
