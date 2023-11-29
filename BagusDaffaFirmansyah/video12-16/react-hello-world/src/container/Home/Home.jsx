import React, { Component } from 'react';
// import WebComponent from '../../component/WebComponent/WebComponent';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>;

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 10000);
  }

  render() {
    return (
      <div>
        {/* <p>Web Component</p>
        <hr />
        <WebComponent time="12.22" title="Tutorial React JS-Bagian 1" desc="10x ditonton. 2 hari yang lalu" />
        <WebComponent time="13.25" title="Tutorial React JS-Bagian 2" desc="100x ditonton. 3 hari yang lalu" />
        <WebComponent time="14.20" title="Tutorial React JS-Bagian 3" desc="50x ditonton. 6 hari yang lalu" />
        <WebComponent time="12.15" title="Tutorial React JS-Bagian 4" desc="30x ditonton. 7 hari yang lalu" />
        <WebComponent /> */}

        {/* <p>Belajar ReactJS WEB</p>
        <hr />
        <Product /> */}

        {/* <h2>LifeCycleComponent</h2>
        <hr />
        {this.state.showComponent ? <LifeCycleComp /> : null} */}

        <h2>Blog Post</h2>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
