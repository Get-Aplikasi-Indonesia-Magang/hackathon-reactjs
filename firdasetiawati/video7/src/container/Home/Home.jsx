import React from "react";
import { Component } from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";

class Home extends Component{
    render(){
        return(
            <div>
            <p>Counter</p>
            <hr/>
            <Product />
            </div>
        )
    }
}

export default Home;