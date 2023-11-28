import React from "react";
import './YTComponent.css';

const YTComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/703x0/webp/photo/2023/02/24/4094338614.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YTComponent.defaultProps = {
    time: '00.00',
    title: 'Title here',
    desc: 'xx ditonton, x hari yang lalu',
  }

export default YTComponent;