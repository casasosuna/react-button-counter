import React from "react"

const Save = props => {
    
    return <button onClick={() => props.onClickFunction(props.value)}>save</button>
}

export default Save