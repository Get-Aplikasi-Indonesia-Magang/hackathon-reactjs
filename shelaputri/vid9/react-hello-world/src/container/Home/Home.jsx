import React, {Component} from 'react' ;
// import LifeCycleComp from './LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(()=> {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }

    render(){
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr />
                <YouTubeComp 
                    img= "https://images.alphacoders.com/115/1156170.jpg"
                    time="7.12" 
                    title="SEVENTEEN"
                    desc="2x ditonton. 2 hari yang lalu"
                />
                <YouTubeComp 
                    img= "https://images.alphacoders.com/115/1156170.jpg"
                    time="8.02" 
                    title="SEVENTEEN"
                    desc="100x ditonton. 23hari yang lalu"
                />
                <YouTubeComp 
                    img= "https://images.alphacoders.com/115/1156170.jpg"
                    time="5.04" 
                    itle="SEVENTEEN"
                    desc="2rb x ditonton. 4 hari yang lalu"
                />
                <YouTubeComp 
                    img= "https://images.alphacoders.com/115/1156170.jpg"
                    time="2.12" 
                    title="SEVENTEEN"
                    desc="10j x ditonton. 5 hari yang lalu"
                />
                <YouTubeComp/> */}
                {/* <p>Counter</p>
                <hr />
                <Product/> */}
                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp/>
                    : null
                } */}
                <p>Blog Post</p>
                <hr />
                <BlogPost/>
            </div>
        )
    }
}

export default Home;