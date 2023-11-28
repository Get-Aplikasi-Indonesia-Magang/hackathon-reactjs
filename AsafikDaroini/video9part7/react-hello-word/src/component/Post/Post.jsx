import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
      <img src="https://picsum.photos/200/300?random=1" width={200} height={150} alt="dummy" />
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
