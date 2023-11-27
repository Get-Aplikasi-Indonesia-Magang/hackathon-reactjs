import React, { Component } from "react";
// import YTComponent from "../../component/YTComponent/YTComponent";
// import Product from "../Product/Product";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        // setTimeout(()=> {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }
    render() {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                <YTComponent 
                time="7.12" 
                title="Your Name Eps 1"
                desc="100x ditonton. 5 jam yang lalu"/>
                <YTComponent 
                time="8.09" 
                title="Your Name Eps 2"
                desc="5000x ditonton. 10 hari yang lalu"/>
                <YTComponent 
                time="5.00" 
                title="Your Name Eps 3"
                desc="10000x ditonton. 20 hari yang lalu"/>
                <YTComponent 
                time="4.09" 
                title="Your Name Eps 4"
                desc="20000x ditonton. 30 hari yang lalu"/>
                <YTComponent /> */}
                {/* <p>Counter</p>
                <hr/>
                <Product/> */}
                {/* <p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent 
                    ? 
                    <LifeCycleComp/>
                    : null
                } */}
                <p>Blog Post</p>
                <hr/>
                <BlogPost/>
            </div>
        )
    }
}
export default Home;