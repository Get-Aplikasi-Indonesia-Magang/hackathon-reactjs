//library
import React, {Component, Fragment } from 'react';
import {Switch, Link, Route} from 'react-router-dom';

//pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

//style
import './Home.css';



class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)   
    }

    render(){
        return (
            <Switch>
                <Fragment>
                    <div className='navigation'>
                        <Link to='/'>Blog Post</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/lifecycle'>Lifecycle</Link>
                        <Link to='/youtube-component'>Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:id" component={DetailPost}  />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/product" component={Product} />
                    <Route path="/youtube-component" component={YoutubeCompPage} />
                </Fragment>
            </Switch>  
        )
    }
}

export default Home;