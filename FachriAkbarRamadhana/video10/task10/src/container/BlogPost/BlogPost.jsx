import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";

class BlogPost extends Component {
    render(){
        return(
            <Fragment>
            <p className="section-title">Blog Post</p>
            <Post title="title" desc="desc" />
            </Fragment>
        )
    }
}

export default BlogPost;