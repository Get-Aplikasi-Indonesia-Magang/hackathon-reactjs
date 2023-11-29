import React, { Component, Fragment } from "react";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import { Route, Link, Switch } from "react-router-dom";
import "./Home.css";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }

  render() {
    return (
        <Switch>
          <Fragment>
            <div className="navigate">
              <Link to="/">Blog Post</Link>
              <Link to="/product">Product</Link>
              <Link to="/lifecycle">LifeCycle</Link>
              <Link to="/youtube-comp">YoutubeComp</Link>
            </div>
            <Route path="/" exact component={BlogPost} />
            <Route path="/detail-post/:id" component={DetailPost} />
            <Route path="/product" component={Product} />
            <Route path="/lifecycle" component={LifeCycleComp} />
            <Route path="/youtube-comp" component={YoutubeCompPage} />
          </Fragment>
        </Switch>
    );
  }
}

export default Home;
