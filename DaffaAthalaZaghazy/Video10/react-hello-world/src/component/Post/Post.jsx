import React from "react";

const Post =(props)=> {
    return(
        <div className="post">
                <div className="img-thumb">
                    <img src="https://placehold.co/200x150/png" alt="dummy"/>
                </div>
                <div className="content">
                    <p className="title">Dummy Title</p>
                    <p className="desc">Dummy Body Here</p>

                </div>

            </div>
    )
}

export default Post;