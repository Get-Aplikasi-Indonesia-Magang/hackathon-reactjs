import React from 'react'
import { Component } from 'react'
import YtComp from "../../../components/YoutubeComp/YtComp";

class YtCompPage extends Component {
  render() {
    return (
      <>
        <p>Youtube Component</p>
        <hr />
        <YtComp 
          time="07.12"
          title="tutorial testing"
          desc="2x ditonton 2 hari yang lalu"
        />
        <YtComp 
          time="07.12"
          title="tutorial testing"
          desc="2x ditonton 2 hari yang lalu"
        />
        <YtComp 
          time="07.12"
          title="tutorial testing"
          desc="2x ditonton 2 hari yang lalu"
        />
      </>
    )
  }
}

export default YtCompPage
