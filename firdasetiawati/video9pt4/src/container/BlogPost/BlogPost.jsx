import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogShop extends Component {
  state = {
    post: []
  };

  getPostAPI = () => {
    axios.get('http://localhost:3004/posts').then((res) => {
      this.setState({
        post: res.data
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  componentDidMount() {
      this.getPostAPI();
    }

  render() {
    return (
      <Fragment>
        <p className='selection-title'>Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogShop;
