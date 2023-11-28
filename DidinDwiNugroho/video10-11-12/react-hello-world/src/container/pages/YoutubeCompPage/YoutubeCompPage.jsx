import React, { Component } from "react";
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp";

class YoutubeCompPage extends Component {
  render() {
    return (
      <>
        <h1>Youtube Page</h1>
        <hr />
        <YouTubeComp time="1.20" title="Vlog" desc="Icikiwir" />
        <YouTubeComp time="3.60" title="Blog" desc="Voging" />
        <YouTubeComp time="2.80" title="Montage" desc="Reuse" />
        <YouTubeComp time="7.09" title="Konoga" desc="Oke Let's Goo" />
        <YouTubeComp />
      </>
    );
  }
}

export default YoutubeCompPage;
