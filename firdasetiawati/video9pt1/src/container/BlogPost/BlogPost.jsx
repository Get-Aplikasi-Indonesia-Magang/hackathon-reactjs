import React, { Component, Fragment }  from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';

class BlogShop extends Component {
    render(){
        return(
            <Fragment>
            <p className='selection-title'>Blog Post</p>
            <Post title="title" decs="desc"/>
        </Fragment>
        )
    }
}

export default BlogShop;