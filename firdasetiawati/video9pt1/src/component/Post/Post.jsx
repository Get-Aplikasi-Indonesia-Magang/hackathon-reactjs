import React from "react";
import { Fragment } from "react";

const Post = (props) => {
    return (
        <div className="post">
                <div className="img-thumb">
                    <img src="https://picsum.photos/200/150" alt="gambar" />
                </div>
                <div className="content">
                    <p className="title">Dummy Title</p>
                    <p className="desc">Dummy body here</p>
                </div>
            </div>
    )
}

export default Post;