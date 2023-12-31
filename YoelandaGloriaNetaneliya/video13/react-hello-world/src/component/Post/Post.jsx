import React from 'react';

import { useNavigate } from 'react-router-dom';


const Post = (props) => {
    const navigate = useNavigate();
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://picsum.photos/200/300" alt="dummy" />
            </div>
            <div className="content">
                <p className="title" onClick= {() => navigate(`/detail-post/${props.data.id}`)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;