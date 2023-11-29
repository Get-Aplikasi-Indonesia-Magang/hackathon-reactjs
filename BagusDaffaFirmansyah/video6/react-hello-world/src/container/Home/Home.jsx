import React, { Component } from 'react';
import WebComponent from '../../component/WebComponent/WebComponent';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Web Component</p>
        <hr />
        <WebComponent time="12.22" title="Tutorial React JS-Bagian 1" desc="10x ditonton. 2 hari yang lalu" />
        <WebComponent time="13.25" title="Tutorial React JS-Bagian 2" desc="100x ditonton. 3 hari yang lalu" />
        <WebComponent time="14.20" title="Tutorial React JS-Bagian 3" desc="50x ditonton. 6 hari yang lalu" />
        <WebComponent time="12.15" title="Tutorial React JS-Bagian 4" desc="30x ditonton. 7 hari yang lalu" />
        <WebComponent />
      </div>
    );
  }
}

export default Home;
