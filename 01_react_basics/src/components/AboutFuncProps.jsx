import React from 'react'

export default function AboutFuncProps(props) {
    return (
        <div>
            <h4>Welcome {props.name}</h4>
            <p>Ths is another arg in the function {props.value} {
                
            }</p>
        </div>
    )
}
