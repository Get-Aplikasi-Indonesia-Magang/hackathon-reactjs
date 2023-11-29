import React from "react";
import "./YuTubComp.css";
import assets from "../../assets";

const YuTubComp = (props) => {
return  (
        <div className="yutub-wrapper">
            <div className="img-thumb">
                <img src={assets.image1} alt="img_thumbnail"/>
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