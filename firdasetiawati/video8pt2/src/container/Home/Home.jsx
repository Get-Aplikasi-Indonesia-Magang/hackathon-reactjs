import React from "react";
import { Component } from "react";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

class Home extends Component{
    state = {
        showComponent: true
    }
    componentDidMount(){

        setTimeout(()=>{
            this.setState({
                showComponent: false
            })
        }, 15000)

    }
    render(){
        return(
            <div>
            <p>Life Cycle Comp</p>
            <hr/>
            {
                this.state.showComponent ?
                <LifeCycleComp />:null
            }
            </div>
        )
    }
}

export default Home;