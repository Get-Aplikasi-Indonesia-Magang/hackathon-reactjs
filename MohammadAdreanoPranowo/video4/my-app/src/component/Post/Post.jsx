import React from "react";
import { useNavigate } from "react-router-dom"; 



const Post = (props) => {
    const navigate = useNavigate()
    return (
        
        <div className="post">
                    <div className="img-thumb">
                        <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="tech_img" />
                    </div>
                    <div className="content">
                        <p className="title" onClick={() => navigate(`/detail-post/${props.data.id}`)}>{props.data.title}</p>
                        <p className="desc">{props.data.body}</p>
                        <button className="update" onClick={()=>props.update(props.data)}>update</button>
                        <button className="remove" onClick={()=>props.remove(props.data.id)}>Remove</button>
                    </div>
                </div>
    )
}

export default Post;