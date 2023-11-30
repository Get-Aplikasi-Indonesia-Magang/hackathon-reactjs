import React, { Component } from "react";
import YouTubeComponent from "../../component/YouTubeComponent/TouTubeComponent";
import Product from "../Product/Product";

class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YouTubeComponent 
                    time="7.12" 
                    title="Tutorial JS bagian - 1"
                    desc="2x ditonton. 2 hari yang lalu" />
                <YouTubeComponent 
                    time="5.17" 
                    title="Tutorial JS bagian - 2"
                    desc="200x ditonton. 5 hari yang lalu" />
                <YouTubeComponent 
                    time="2.24" 
                    title="Tutorial JS bagian - 3"
                    desc="2155x ditonton. 3 hari yang lalu" />
                <YouTubeComponent 
                    time="7.48" 
                    title="Tutorial JS bagian - 4"
                    desc="22x ditonton. 5 hari yang lalu" />
                <YouTubeComponent /> */}
                <p>Counter</p>
                <hr />
                <Product/>
            </div>
        );
    }
}

export default Home;
