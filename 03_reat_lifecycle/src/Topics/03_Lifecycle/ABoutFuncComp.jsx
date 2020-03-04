import React from 'react'
import AboutFuncCompTwo from './AboutFuncCompTwo'

export default function ABoutFuncComp() {
    const  greetings = "Hello functional component"
    return (
        <div>
            <h2>{greetings}</h2>
            <h4>{<HeadLine></HeadLine>}</h4>
            <h4>{<GetInfo value={greetings}></GetInfo>}</h4>
            <h4>{<ArrowFunction></ArrowFunction>}</h4>
            <h4><AboutFuncCompTwo></AboutFuncCompTwo></h4>
        </div>
    )
}

function HeadLine(){
    const greeting = "Hello from child functional component";
    return <h4>{greeting}</h4>;
}

function GetInfo(props){
return <h4>{props.value}</h4>;
}

const ArrowFunction = () => {
    return <HeadLine></HeadLine>
}