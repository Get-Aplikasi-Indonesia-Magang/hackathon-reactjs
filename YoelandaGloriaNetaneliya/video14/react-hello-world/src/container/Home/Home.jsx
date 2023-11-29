//library
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//pages
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

//style
import './Home.css';



class Home extends Component {
    state = {
        showComponent: true
    }
    
    render() {
        return ( 
          <Router>
            <div className="navigation">
                <Link to="/">Blog Post</Link>
                <Link to="/product">Product</Link>
                <Link to="/lifecycle">LifeCycle</Link>
                <Link to="/youtube-component">YouTube</Link>
            </div>
            <Routes>
              <Route path="/" element={<BlogPost />} />
              <Route path="/detail-post/:id" element={<DetailPost />} />
              <Route path="/product" element={<Product />} />
              <Route path="/lifecycle" element={<LifeCycleComp />} />
              <Route path="/youtube-component" element={<YoutubeCompPage />} />
            </Routes>
          </Router>
        );
      }
    // render() {
    //     return (
    //         <BrowserRouter>
    //             {/* <div>
    //             <p>YouTube Component</p>
    //             <hr/>
    //             <YTComponent 
    //             time="7.12" 
    //             title="Your Name Eps 1"
    //             desc="100x ditonton. 5 jam yang lalu"/>
    //             <YTComponent 
    //             time="8.09" 
    //             title="Your Name Eps 2"
    //             desc="5000x ditonton. 10 hari yang lalu"/>
    //             <YTComponent 
    //             time="5.00" 
    //             title="Your Name Eps 3"
    //             desc="10000x ditonton. 20 hari yang lalu"/>
    //             <YTComponent 
    //             time="4.09" 
    //             title="Your Name Eps 4"
    //             desc="20000x ditonton. 30 hari yang lalu"/>
    //             <YTComponent />
    //             <p>Counter</p>
    //             <hr/>
    //             <Product/>
    //             <p>LifeCycle Component</p>
    //             <hr/>
    //             {
    //                 this.state.showComponent 
    //                 ? 
    //                 <LifeCycleComp/>
    //                 : null
    //             }
    //             <p>Blog Post</p>
    //             <hr/>
    //             <BlogPost/>
    //         </div> */}
    //             <Fragment>
    //                 <Route path="/" component={BlogPost} />
    //                 <Route path="/product" component={Product} />
    //                 <Route path="/lifecycle" component={LifeCycleComp} />
    //             </Fragment>
    //         </BrowserRouter>
    //     )
    // }
}
export default Home;