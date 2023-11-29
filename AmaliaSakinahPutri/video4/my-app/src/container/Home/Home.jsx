import React, {Component} from "react";
// import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
// import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
class Home extends Component {
    render() {
        return(
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                <YouTubeComp
                    time="7.12"
                    title="Film Barbie - Bagian 1"
                    desc="2x ditonton, 2 hari yang lalu"/>
                <YouTubeComp 
                    time="8.02" 
                    title="Film Barbie - Bagian 2"
                    desc="200x ditonton, 10 hari yang lalu"/>
                <YouTubeComp 
                    time="5.04" 
                    title="Film Barbie - Bagian 3"
                    desc="500x ditonton, 4 hari yang lalu"/>
                <YouTubeComp 
                    time="4.12" 
                    title="Film Barbie - Bagian 4"
                    desc="1k ditonton, 14 hari yang lalu"/>
                <YouTubeComp/> */}
                {/*<p>Counter</p>
                <hr/>
                <Product /> */}
                <p>LifeCycle Component</p>
                <hr/>
                <LifeCycleComp/>
            </div>
            
        )
    }
}

export default Home;