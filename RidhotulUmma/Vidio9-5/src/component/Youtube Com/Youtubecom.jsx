import React from "react";
import './Youtubecom.css';
const YouTubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://thumbor.prod.vidiocdn.com/H_xo8-gta-cB1Z85ojk1THZbC6o=/filters:quality(70)/vidio-web-prod-video/uploads/video/image/7740791/aksi-welberlieskott-de-halim-jardim-06bcd6.jpg" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
YouTubeComp.defaultProps ={
    time: '00.00',
    title: 'judul',
    desc: 'descripsi'
}
export default YouTubeComp;