import React, {Component} from 'react' ;
import YouTubeComp from '../component/YouTubeComp/YouTubeComp';
import Product from './Product/Product';

class Home extends Component {
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
                <p>Counter</p>
                <hr />
                <Product/>
            </div>
        )
    }
}

export default Home;