import React, { Component } from "react";
import YtComp from "../../components/YoutubeComp/YtComp";

class Home extends Component {
    render() {
        return (
            <>
                <p>Youtube Component</p>
                <hr />
                <YtComp time="7.12" title="Tutorial react bagian 1" desc="2x ditonton, 2hari yang lalu"/>
                <YtComp time="0.02" title="Tutorial react bagian 2" desc="10x ditonton, 4hari yang lalu"/>
                <YtComp time="5.04" title="Tutorial react bagian 3" desc="200x ditonton, 10hari yang lalu"/>
                <YtComp time="4.12" title="Tutorial react bagian 4" desc="180x ditonton, 1hari yang lalu"/>
            </>
        )
    }
}

export default Home;