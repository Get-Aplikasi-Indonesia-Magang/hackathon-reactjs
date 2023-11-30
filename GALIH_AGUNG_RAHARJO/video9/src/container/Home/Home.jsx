import React, { Component } from "react";
import LifeCycleCop from "../LifeCycleComp/LifeCycleCop";

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: false
            });
        }, 15000);
    }

    render() {
        return (
            <>
                <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent ?
                    <LifeCycleCop /> :
                    null
                }
            </>
        )
    }
}

export default Home;