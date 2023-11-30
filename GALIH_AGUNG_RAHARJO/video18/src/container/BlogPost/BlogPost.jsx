import React, { Component, Fragment } from 'react'
import "./BlogPost.css"
import Post from '../../components/Post/Post'
class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            useId: 1,
        },
        isUpdate: false
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log("value obj form blog post", this.state.formBlogPost);
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <Fragment>
                <p>Home Component</p>
                <hr />
                <p className='section-title'>Blog Post</p>
                <div className='container'>
                    <div className='form-add-post'>
                        <label htmlFor="title">Title</label>
                        <input type="text" name='title' placeholder='add title' />
                        <label htmlFor="body">Blog Content</label>
                        <textarea name="body" id="body" cols="30" rows="10"></textarea>
                        <button className='btn-submit'>Simpan</button>
                    </div>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost