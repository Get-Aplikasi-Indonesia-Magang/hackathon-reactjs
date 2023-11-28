import React from "react";
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/an_webp/lYiE5lBS13E/mqdefault_6s.webp?du=3000&sqp=COvjkKsG&rs=AOn4CLBeQsHvWCktTThj5Z-UW3b_5EVREA" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

export default YouTubeComp;