import React from "react";
import assets from "../../assets";

const Post = (porps) => {
    return (
        <div className="post">
                        <div className="img-thumb" >
                            <img src={assets.image4} alt="img_post"/>
                        </div>
                        <div className="content">
                            <p className="title">{porps.title}</p>
                        <   p className="desc">{porps.desc}</p>
                        </div>
        </div>
    )
}

export default Post;