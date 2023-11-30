import React from "react";
import { Component } from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";

class Home extends Component{
    render(){
        return(
            <div>
            <p>Youtube Component</p>
            <hr/>
            <YouTubeComp time="8.20" title="Animasi anak-anak Bubu part 1" desc="300x ditonton. 2 hari yang lalu"/>
            <YouTubeComp time="3.10" title="Animasi anak-anak Bubu part 2" desc="200x ditonton. 3 hari yang lalu"/>
            <YouTubeComp time="4.00" title="Animasi anak-anak Bubu part 3" desc="130x ditonton. 14 hari yang lalu"/>
            <YouTubeComp time="15.40" title="Animasi anak-anak Bubu part 4" desc="10x ditonton. 16 hari yang lalu"/>
            <YouTubeComp />
            </div>
        )
    }
}

export default Home;