import React from "react";

const Post = (props) => {
    return (
        <div className="post">
        <div className="img-thumb">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VmbLEal57dI1gWcNELeopEOjKq2G06ggVw&usqp=CAU" alt="dummy" />
        </div>
        <div className="content">
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
            <button>Remove</button>
        </div>
    </div>

    )

}

export default Post;