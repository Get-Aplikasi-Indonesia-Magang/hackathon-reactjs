import React, { Component } from "react";
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 1
        }
    
    }

    static getDerivedStateFromProps (props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount () {
        console.log('componenDidMount')
        setTimeout(()=>{
            this.setState({
                count: 2
            })
        }, 3000)
       
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponenUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }

    componentWilUnmount(){
        console.log('componentWilUnmount')
    }

    render(){
        return(
            <button className="btn">Component Button {this.state.count}</button>
        )
    }

}

export default LifeCycleComp;