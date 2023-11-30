import React, { Component } from "react";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: false
            });
        }, 15000);
    }

    render() {
        return (
            <>
                <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent ?
                    <BlogPost /> :
                    null
                }
            </>
        )
    }
}

export default Home;