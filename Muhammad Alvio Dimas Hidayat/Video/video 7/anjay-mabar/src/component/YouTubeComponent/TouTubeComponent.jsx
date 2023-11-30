import React from "react";
import './YouTubeComponent.css';

const YouTubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i3.ytimg.com/vi/CZKcmzNs5Jw/maxresdefault.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComponent.defaultProps = {
    time: '00.00',
    title: 'Title here',
    desc: 'Desc here'
}

export default YouTubeComponent;