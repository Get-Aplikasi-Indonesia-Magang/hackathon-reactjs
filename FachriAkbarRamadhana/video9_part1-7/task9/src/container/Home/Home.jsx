import React from "react";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import { Component } from "react";
// import Product from "../Product/Product";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";



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
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YoutubeComp 
                    time="7.10" 
                    title="Era Baru Barcelona"
                    desc="233x ditonton. 3 hari yang lalu"/>
                <YoutubeComp 
                    time="5.13" 
                    title="Barcelona XaviBall"
                    desc="502x ditonton. 7 hari yang lalu"/>
                <YoutubeComp 
                    time="3.50" 
                    title="Barcelona Treble Winners"
                    desc="1.2k ditonton. 17 hari yang lalu"/>
                <YoutubeComp/> */}
                {/* <p>Counter</p>
                <hr />
                <Product/> */}
                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp />
                    : null
                } */}
                <p>Blog Post</p>
                <hr />
                <BlogPost />
                
            </div>
        )
    }
}

export default Home;