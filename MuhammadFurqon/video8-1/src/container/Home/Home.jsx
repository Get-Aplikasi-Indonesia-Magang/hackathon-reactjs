import React, {Component} from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
        
    }
    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YouTubeComp time="7.12" title="Good Job" desc="2x ditonton 5 hari yang lalu"/>
                <YouTubeComp time="8.21" title="Well Done" desc="10x ditonton 6 hari yang lalu"/>
                <YouTubeComp time="12.22" title="Attack The Lord" desc="100rbx ditonton 1 bulan yang lalu"/>
                <YouTubeComp time="14.52" title="Tapi Boong Hayuuk" desc="1jtx ditonton 1 tahun yang lalu"/>
                <YouTubeComp title="Oeoeoe" desc="2x ditonton 5 hari yang lalu"/> */}
                {/* <p>Counter</p>
                <hr />
                <Product /> */}
                <p>LifeCycleComp</p>
                <hr />
                {
                    this.state.showComponent ?
                    <LifeCycleComp/>: null
                }
                
            </div>
        )
    }
}

// YouTubeComp.defaultProps = {
//     time: '00.00'
// }

export default Home;