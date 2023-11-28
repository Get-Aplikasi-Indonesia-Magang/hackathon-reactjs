import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://source.unsplash.com/200x150?" alt="dummy" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button
          className="update"
          onClick={() => props.onUpdate(props.data)}
        >
          Update
        </button>
        <button
          className="remove"
          onClick={() => props.onRemove(props.data.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;
