import React, {Component, Fragment} from "react";
import './BlogPost.css';

class BlogPost extends Component {
    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <post title="title" desc="desc" />
            </Fragment>
        )
    }
}

export default BlogPost;