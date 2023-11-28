import React from "react";
import "./YuTubComp.css";

const YuTubComp = (props) => {
return  (
        <div className="yutub-wrapper">
            <div className="img-thumb">
                <img src="" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YuTubComp.defaultProps = {
    time: "00.00",
    title: "TITLE 5",
    desc: "Desc 5"
}
  

export default YuTubComp;