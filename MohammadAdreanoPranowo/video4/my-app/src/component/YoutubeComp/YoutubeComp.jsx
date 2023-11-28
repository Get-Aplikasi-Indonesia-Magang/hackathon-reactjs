import React from "react";
import './YoutubeComp.css';

const YoutubeComp = (props) =>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYCmOKClHeV7GPNyWhQZkUueNrWq6KB7ktg&usqp=CAU" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    ) 
}

YoutubeComp.defaultProps = {
    time : "00.00",
    title : "by 1 with",
    desc : "100rbX ditonton, 1 hari yang lalu"
}

export default YoutubeComp;