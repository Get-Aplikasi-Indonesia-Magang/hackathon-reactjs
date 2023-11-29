import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../../component/Post/Post";
import axios from "axios";

import {Navigate} from 'react-router-dom'

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
    isDetail: null,
    
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };

  postDataToAPI = () => {
    axios
      .post("http://localhost:3004/posts", this.state.formBlogPost)
      .then((result) => {
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((result) => {
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
      this.getPostAPI();
    });
  };

  handleFormChange = (event) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };



 

  handleDetail = (data) => {
    this.setState({isDetail: data})
  }

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  componentDidMount() {
    this.getPostAPI();
  }
  render() { 
    let {isDetail} = this.state;
    return (
      <Fragment>

        {
          isDetail && <Navigate to={`/detail-post/${isDetail}`}/>
        }

        <p>Halaman Blog Spot</p>
        <hr />
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Add Title"
            onChange={this.handleFormChange}
            value={this.state.formBlogPost.title}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="Add Blog Content"
            onChange={this.handleFormChange}
            value={this.state.formBlogPost.body}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Add
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <Post key={post.id} data={post} onRemove={this.handleRemove}
              onUpdate={this.handleUpdate} goDetail={this.handleDetail}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default  BlogPost;
