import React, { Component } from "react";
import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

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
      <div>
        {/* <p>Youtube Component</p>
        <hr />
        <YouTubeComp time="1.20" title="Vlog" desc="Icikiwir" />
        <YouTubeComp time="3.60" title="Blog" desc="Voging" />
        <YouTubeComp time="2.80" title="Montage" desc="Reuse" />
        <YouTubeComp time="7.09" title="Konoga" desc="Oke Let's Goo" />
        <YouTubeComp /> */}
        {/* <p>Conter</p>
        <hr />
        <Product /> */}
        {/* <p>LifeCycle Component</p>
        <hr />
        {this.state.showComponent ? <LifeCycleComp /> : null} */}
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
