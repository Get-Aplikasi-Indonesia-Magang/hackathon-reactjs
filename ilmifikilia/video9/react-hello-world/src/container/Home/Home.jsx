import React, {Component} from "react";
import YtComp from "../../component/YtComp/YtComp";
import Product from "../Product/Product";
import LifeCyleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
    state = {
        showComponent: true
    }
    // componentDidMount(){
    //     setTimeout(()=> {
    //         this.setState({
    //             showComponent: false
    //         })
    //     }, 15000)
    // }
    render(){
        return(
            <div>
                {/* <p>Counter</p>
                <hr/>
                <Product /> */}
                {/* <p>LifeCyle Component</p>
                <hr/>
                {
                    this.state.showComponent 
                    ?
                    <LifeCyleComp/>
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