import React from "react"

const Decrease = props => {
    
    return <button onClick={() => props.onClickFunction(props.increment)}>-{props.increment}</button>
}

export default Decrease