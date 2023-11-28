import React, { Component } from "react";
import YouTubeComp from "../../component/Youtube Com/Youtubecom";

class Home extends Component {
    render(){
        return(
            <div>
        <YouTubeComp
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
        <YouTubeComp/>
        </div>
        )
    }
}
export default Home;