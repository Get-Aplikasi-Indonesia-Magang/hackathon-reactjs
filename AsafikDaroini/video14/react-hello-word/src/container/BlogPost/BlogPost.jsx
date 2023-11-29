import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: '',
      body: '',
      userId: 1
    }
  };

  getPostAPI = () => {
    axios.get("http://localhost:3004/posts").then((result) => {
      //   console.log(result.data);
      this.setState({
        post: result.data,
      });
    });
  };

  handleRemove = (data) => {
    console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
      this.getPostAPI();
    });
  };


  handleFromChange =(event) => {
    // console.log('form Change', event.target )
    let formBlogPostNew = {...this.state.formBlogPost}
    console.log(event.target.name)
    formBlogPostNew[event.target.name] = event.target.value
    this.setState({
      formBlogPost: formBlogPostNew
    }, () => {
      console.log('value obj formBlogSpots: ', this.state.formBlogPost)
    })
   
  }

  componentDidMount() {
  
    this.getPostAPI();
  }
  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
            <label htmlFor="title">title</label>
            <input type="text" name="title" placeholder="add title" onChange={this.handleFromChange} />
            <label htmlFor="body">Blog Content</label>
            <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFromChange}></textarea>
            <button className="btn-submit ">Simpan</button>
        </div>
        {this.state.post.map((post) => {
          return (
            <Post key={post.id} data={post} onRemove={this.handleRemove} />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
