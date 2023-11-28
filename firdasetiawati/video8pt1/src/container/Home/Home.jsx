import React from "react";
import { Component } from "react";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

class Home extends Component{
    render(){
        return(
            <div>
            <p>Life Cycle Comp</p>
            <LifeCycleComp />
            </div>
        )
    }
}

export default Home;