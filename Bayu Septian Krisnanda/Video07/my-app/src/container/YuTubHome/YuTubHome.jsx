import React, {Component} from "react";
import YuTubComp from "../../component/YuTubComp/YuTubComp";
import Product from "../Product/Product";
import assets from "../../assets";

class YuTubHome extends Component{
    render(){
        return  (
                <div>
                    <p>Yutub Component</p>
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
                    <YuTubComp/>
                    <p>Counter</p>
                    <hr/>
                    <Product/>
                </div> 
                )
    }
}

export default YuTubHome