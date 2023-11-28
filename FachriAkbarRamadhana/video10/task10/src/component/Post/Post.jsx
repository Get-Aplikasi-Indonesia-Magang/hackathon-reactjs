import React from "react";

const Post = (props) => {
    return(
        <div className="post">
            <div className="img-thumb">
                <img src="https://picsum.photos/200/150?random=1" alt="dummy" />
            </div>
            <div className="content">
                <p className="title">Dummy Title</p>
                <p className="desc">Dummy Body Here</p>
            </div>
        </div>
    )
}

export default Post;