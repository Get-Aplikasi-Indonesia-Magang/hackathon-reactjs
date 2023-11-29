import React, {Component, Fragment} from "react";
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp'
class YoutubeCompPage extends Component{
    render(){
        return(
            <Fragment>
                <p>Halaman Youtube</p>
                <hr />
                <YoutubeComp
                time="7.12"
                title="Tutorial"
                desc="sudah di tonton" />
                <YoutubeComp
                time="7.12"
                title="Tutorial"
                desc="sudah di tonton" />
                <YoutubeComp
                time="7.12"
                title="Tutorial"
                desc="sudah di tonton" />
                <YoutubeComp
                time="7.12"
                title="Tutorial"
                desc="sudah di tonton" />
                <YoutubeComp
                time="7.12"
                title="Tutorial"
                desc="sudah di tonton" />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;