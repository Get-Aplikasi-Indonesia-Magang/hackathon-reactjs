import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import './BlogPost.css';
import Post from "../../../component/Post/Post";
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
        },
        isUpdate: false,
    };

    getPostAPI = () => {
        axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
        .then((result)=> {
            // console.log(result.data);
            this.setState({
                post: result.data,
            });
        });
    };

    postDataToAPI = () => {
        axios
        .post("http://localhost:3001/posts", this.state.formBlogPost)
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
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3001/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((result) =>{
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            });
        });
    };

    handleRemove = (data) => {
        axios.delete(`http://localhost:3001/posts/${data}`).then((res) =>{
            this.getPostAPI()
        });
    };

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
        
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target)
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        // console.log(event.target.name);
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew,
        })
    }    

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI()
        }else{
            this.postDataToAPI(); 
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render(){
        return(
            <Fragment>
                <h1>Halaman Blog Post</h1>
                <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} value={this.state.formBlogPost.title} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} onRemove={this.handleRemove} onUpdate={this.handleUpdate} onDetail={this.handleDetail}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;