import React from "react";
import './YoutubeComp.css'
const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
            <img src="https://i.ytimg.com/vi/UzrvF7Sb3WE/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAqoFigIMCAAQARhNIF8oZTAP&rs=AOn4CLBdDHwi4mIX6rxlZ7GQYc9C-cGHzQ" alt="" />
             <p className="time"> {props.time} </p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>

        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'default title',
    desc: "00 ditonton. 00 hari yang lalu boskuee"
}

export default YoutubeComp;