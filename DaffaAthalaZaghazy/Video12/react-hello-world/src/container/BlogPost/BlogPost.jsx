import React, { Component, Fragment } from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from 'axios';

class BlogPost extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             posts: json
        //         });
        //     });

        axios.get('http://localhost:3000/posts')
        .then((res)=>{
            this.setState({
                            posts: res.data
                        });
        })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.posts.map(post => (
                        <Post key={post.id} title={post.title} desc={post.body} />
                    ))
                }
            </Fragment>
        );
    }
}

export default BlogPost;
