import React from "react";
import './YouTubeComp.css'

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.pinimg.com/564x/8c/5e/17/8c5e17137da5f38c20fca617598cb67c.jpg" alt="Gambar"/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time : '00.00',
    title: 'Title Here',
    desc: 'xx ditonton. x hari yang lalu'
}

export default YouTubeComp;