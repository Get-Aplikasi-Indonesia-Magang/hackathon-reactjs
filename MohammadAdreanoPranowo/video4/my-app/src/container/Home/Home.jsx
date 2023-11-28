import React, {Component} from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";

class Home extends Component{
    render(){
        return(
            <div>
                <p>Youtube Component</p>
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
                <YoutubeComp />
            </div>
        )
    }
}

export default Home;