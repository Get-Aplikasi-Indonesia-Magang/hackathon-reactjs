import React from 'react';
import BlogPost from '../../container/BlogPost/BlogPost';

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placehold.co/600x400" alt="Dummy" />
      </div>
      <div className="content">
        <p className="title">Dumy Title</p>
        <p className="desc">Dummy Body here</p>
      </div>
    </div>
  );
};

export default Post;
