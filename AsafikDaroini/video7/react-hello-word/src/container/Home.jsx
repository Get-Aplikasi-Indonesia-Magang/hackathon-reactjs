import React from 'react'
import { Component } from 'react';

import YouTubeComp from '../components/YoutubeComp/YouTubeComp'
import Product from './Product/Product';

class Home extends Component {
    render() {
        return (
            <div>
                <p>YouTube Components</p>
                <hr />
                 <YouTubeComp 
                 time='7.12' 
                 title='Video Monyet Pongo'
                 desc='5x ditonton 2 harri yang lalu'/>
                 
                 <YouTubeComp 
                 time ='8.02' 
                 title='Video Monyet Pongo'
                 desc='50x ditonton 10 harri yang lalu'/>
                 <YouTubeComp 
                 time ='5.04' 
                 title='Video Monyet Pongo'
                 desc='500x ditonton 20 harri yang lalu'/>
                 <YouTubeComp 
                 time='4.12' 
                 title='Video Monyet Pongo'
                 desc='700x ditonton 30 harri yang lalu'/>
                 <YouTubeComp/>
                 <p>Couter</p>
                 <hr />
                 <Product/>
            </div>
            
        )
    }
}

export default Home