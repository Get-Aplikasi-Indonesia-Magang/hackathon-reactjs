import React, { Component } from "react";
import Product from "../Product/Product";
import LifeCycleCop from "../LifeCycleComp/LifeCycleCop";

class Home extends Component {
    render() {
        return (
            <>
                <p>LifeCycle Component</p>
                <hr />
                <LifeCycleCop />
            </>
        )
    }
}

export default Home;