import React, { Component, Fragment } from "react";
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
    render(){
        return(
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp
                    time="7.12"
                    title="Era Baru Barcelona"
                    desc="233x ditonton. 3 hari yang lalu"/>
                <YoutubeComp
                    time="12.12"
                    title="Barcelona XaviBall"
                    desc="502x ditonton. 7 hari yang lalu"/>
                <YoutubeComp
                    time="8.02"
                    title="Barcelona Treble Winners"
                    desc="1.2k ditonton. 17 hari yang lalu"/>
                <YoutubeComp/>
            </Fragment>
        )
    }
}

export default YoutubeCompPage;