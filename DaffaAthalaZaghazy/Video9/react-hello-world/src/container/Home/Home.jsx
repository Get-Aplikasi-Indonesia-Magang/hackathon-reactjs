import React from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";


class Home extends React.Component {
    state = {
        showComponent: true
        
    }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({
    //             showComponent: false
    //         })    
    //     }, 15000)
        
    // }


    render() {
        return (
            <div>
                {/* <YoutubeComp 
                time="12.00" 
                title="halo halo"
                desc="9 jt kali ditontonton. 2 hari yang lalu"
                />
                <YoutubeComp 
                time="10.00"
                title="halo halo"
                desc="5 jt kali ditontonton. 9 hari yang lalu"
                />
                <YoutubeComp 
                time="05.00"
                title="halo halo"
                desc="1jt kali ditontonton. 5 hari yang lalu"
                />
                <YoutubeComp
                 time="33.00"
                 title="halo halo"
                 desc="2,5 jt kali ditontonton. 1 hari yang lalu"
                 />
                <YoutubeComp /> */}


                {/* <p>counter</p>
                <hr/>
                <div>
                <Product/>
                </div> */}
                { 
                    this.state.showComponent 
                    ?
                    <LifeCycleComp />
                    : null
                }
                
                

            </div>
    
        )
    }
}

export default Home;