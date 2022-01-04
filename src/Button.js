import React from "react"

const Button = props => {
    
    return <button onClick={() => props.onClickFunction(props.increment)}>+{props.increment}</button>
}

export default Button
