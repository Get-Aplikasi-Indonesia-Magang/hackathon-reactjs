import React, { Component } from "react";
import YTComponent from "../../component/YTComponent/YTComponent";
import Product from "../Product/Product";

class Home extends Component {
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
                <p>Counter</p>
                <hr/>
                <Product/>
            </div>
        )
    }
}
export default Home;