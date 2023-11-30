import React from "react";

const Post = (props) => {
    return (
        <div className="post">
                    <div className="img-thumb">
                        <img src="https://images.unsplash.com/photo-1671197244266-73129c97c096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="dummy"/>
                    </div>
                    <div className="content">
                        <p className="title">{props.title}</p>
                        <p className="desc">{props.desc}</p>
                    </div>
                </div>
    )
}

export default Post;