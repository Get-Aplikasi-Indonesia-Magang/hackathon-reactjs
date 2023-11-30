import React from "react";

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://fastly.picsum.photos/id/490/200/300.jpg?hmac=8hYDsOwzzMCthBMYMN9bM6POtrJfVAmsvamM2oOEiF4" alt="dummy" />
            </div>
            <div className="content">
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Post;