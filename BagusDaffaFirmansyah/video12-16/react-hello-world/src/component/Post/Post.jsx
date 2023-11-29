import React from 'react';
import BlogPost from '../../container/BlogPost/BlogPost';

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placehold.co/600x400" alt="Dummy" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button className="delete" onClick={() => props.onClick(props.data.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
