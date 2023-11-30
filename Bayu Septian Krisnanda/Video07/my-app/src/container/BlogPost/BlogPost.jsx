import React, {Component, Fragment} from "react";
import "./BlogPost.css"
import Post from "../../component/Post/Post";
import assets from "../../assets";
import axios from "axios";

class BlogPost extends Component {
    state = {
        post: []
    }
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> {
            console.log(res.data);
        })
    }
    render (){
        return(
            <Fragment>
                <p className="section-title">BlogPost</p>
                <hr/>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }    
            </Fragment> 
        )    
    }
}

export default BlogPost;