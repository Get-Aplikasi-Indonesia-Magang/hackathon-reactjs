import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <p className="title">{props.name}</p>
            <p>{props.job}</p>
        </div>    
    )
}

export default Card;