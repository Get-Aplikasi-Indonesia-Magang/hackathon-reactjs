import React from "react";
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://cdn1-production-images-kly.akamaized.net/YH9oBSnD_By2x61b0JxBFsyZVR4=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/894765/original/091559100_1433625750-2015-06-06T212041Z_1254621402_LR1EB661NA57G_RTRMADP_3_SOC.JPG" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'xx ditonton. x hari yang lalu'
}

export default YoutubeComp;