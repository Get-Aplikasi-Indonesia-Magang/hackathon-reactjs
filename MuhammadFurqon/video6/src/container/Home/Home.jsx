import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';

class Home extends Component {
    render(){
        return(
            <div>
                <p>Youtube Component</p>
                <hr />
                <YouTubeComp time="7.12" title="Good Job" desc="2x ditonton 5 hari yang lalu"/>
                <YouTubeComp time="8.21" title="Well Done" desc="10x ditonton 6 hari yang lalu"/>
                <YouTubeComp time="12.22" title="Attack The Lord" desc="100rbx ditonton 1 bulan yang lalu"/>
                <YouTubeComp time="14.52" title="Tapi Boong Hayuuk" desc="1jtx ditonton 1 tahun yang lalu"/>
                <YouTubeComp title="Oeoeoe" desc="2x ditonton 5 hari yang lalu"/>
            </div>
        )
    }
}

YouTubeComp.defaultProps = {
    time: '00.00'
}

export default Home;