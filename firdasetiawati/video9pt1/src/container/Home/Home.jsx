import React from "react";
import { Component } from "react";
import BlogShop from "../BlogPost/BlogPost";

class Home extends Component{
    render(){
        return(
            <div>
            <p>Blog Post</p>
            <hr/>
            <BlogShop/>
            </div>
        )
    }
}

export default Home;