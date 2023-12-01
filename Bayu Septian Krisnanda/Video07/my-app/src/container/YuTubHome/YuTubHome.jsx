import React, {Component} from "react";
import YuTubComp from "../../component/YuTubComp/YuTubComp";
import Product from "../Product/Product";
import assets from "../../assets";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

class YuTubHome extends Component{
    state = {
        showComponent: true 
    }

    componentDidMount(){
        // setTimeout(()=> {
        //     this.setState({
        //     showComponent: false
        // })
        // }, 15000)
    }

    render(){
        return  (
                <div>
                    {/* <p>Yutub Component</p>
                    <hr/>
                    <YuTubComp 
                        time="13.15" 
                        title="Title 1"
                        desc="desc 1"/>
                    <YuTubComp 
                        time="11.26" 
                        title="Title 2"
                        desc="desc 2"/>
                    <YuTubComp 
                        time="05.34" 
                        title="Title 3"
                        desc="desc 3"/>
                    <YuTubComp 
                        time="04.43" 
                        title="Title 4"
                        desc="desc 4"/>
                    <YuTubComp/> */}
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
                    <p> BlogPost</p>
                    <hr/>
                    <BlogPost/>
                </div> 
                )
    }
}

export default YuTubHome