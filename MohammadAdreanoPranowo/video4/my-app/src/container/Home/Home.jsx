import React, {Component} from "react";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
// import Product from "../Product/Product";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component{
    
    state = {
        showComponent: true
    }

    componentDidMount(){
        // this.setState({
        //     showComponent: false
        // })
    }

    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                time="8.30" 
                title="pubg new"
                desc="1jtX ditonton, 2 hari yang lalu"/>
                <YoutubeComp 
                time="9.20" 
                title="event pubg"
                desc="2jtX ditonton, 3 hari yang lalu"/>
                <YoutubeComp 
                time="6.10" 
                title="update new"
                desc="1jtX ditonton, 4 hari yang lalu"/>
                <YoutubeComp 
                time="5.40" 
                title="solo vs squad"
                desc="2jtX ditonton, 2 hari yang lalu"/>
                <YoutubeComp /> */}
                {/* <p>Counter</p>
                <hr/>
                <Product /> */}
                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent ?
                    <LifeCycleComp /> : null
                } */}
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}

export default Home;