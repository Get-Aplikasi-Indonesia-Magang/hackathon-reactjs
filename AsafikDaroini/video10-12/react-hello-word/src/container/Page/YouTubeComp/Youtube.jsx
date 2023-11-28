import React, {Component} from 'react'
import YouTubeComp from  '../../../component/YouTubeComp/YouTubeComp'

class Youtube extends Component {
    render() {
        return (
            <>
                 <div>
                <p>Youtube Component</p>
                <hr />
                <YouTubeComp time="1.20" title="Vlog" desc="Icikiwir" />
                <YouTubeComp time="3.60" title="Blog" desc="Voging" />
                <YouTubeComp time="2.80" title="Montage" desc="Reuse" />
                <YouTubeComp time="7.09" title="Konoga" desc="Oke Let's Goo" />
                <YouTubeComp />
             </div>
            </>
        )
    }
}

export default Youtube