import React, { Component, Fragment } from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from 'axios';

class BlogPost extends Component {
    state = {
        posts: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((res)=>{
            this.setState({
                            posts: res.data
                        });
        })
    }

    handleRemove = (data) => {

        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI()

        })
    }



    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             posts: json
        //         });
        //     });

        this.getPostAPI()
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.posts.map(post => (
                        <Post key={post.id} data={post} remove={this.handleRemove}/>
                    ))
                }
            </Fragment>
        );
    }
}

export default BlogPost;
