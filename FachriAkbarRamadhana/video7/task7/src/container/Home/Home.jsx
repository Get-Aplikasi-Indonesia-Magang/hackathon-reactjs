import React from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import { Component } from "react";
import Product from "../Product/Product";



class Home extends Component {
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
                <p>Counter</p>
                <hr />
                <Product/>
            </div>
        )
    }
}

export default Home;