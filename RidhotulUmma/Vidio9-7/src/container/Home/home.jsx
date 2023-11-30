import React, { Component } from "react";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";
// import YouTubeComp from "../../component/Youtube Com/Youtubecom";
// import Product from "../Product/Product";

class Home extends Component {
    state = {
        showComponet: true
    }
    componentDidMount(){
         //  setTimeout (() => {
        //    this.setState({
        //     showComponent: false
        //    })
        // }, 15000)
    }
    render(){
        return(
            <div>
        {/* <YouTubeComp
         time="2.7" 
         title="Vidio 1"
         desc="21x ditonton.   10 hari lalu"/>
        <YouTubeComp time="7.9" 
        title="Vidio 2"
        desc="2x ditonton.   3 hari lalu"
        />
        <YouTubeComp time="29.7" 
        title="Vidio 3"
        desc="29x ditonton.   13 hari lalu"
        />
        <YouTubeComp/> */}
        {/* <p>Counter</p>
        <hr />
        <Product/> */}
        {/* <p>LifeCycleComp</p>
        <hr />
        {
            this.state.showComponet 
            ?
            <LifeCycleComp/>
            : null
        } */}
        <p>Blog Post</p>
        <hr />
        <BlogPost/>
        </div>
        )
    }
}
export default Home;