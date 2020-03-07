import React from 'react'

export default function TernaryRendering() {
    return (
        <div>
            <GetInfo></GetInfo>
            <LogicalAnd></LogicalAnd>
            <SwitchComponent props={"one"}></SwitchComponent>
        </div>
    )
}


const GetInfo = ({isAllowed}) =>{
    return isAllowed ? <p>This is your account information</p> : <p>Please log in </p>
}

//Logical operator && (both condition must be true or all the conditional statement is false)

const LogicalAnd = () => {
    return <div>
        {
            (20>18) && <p>This is logical and operator</p>
        }
    </div>
}

//switch operator

const SwitchComponent = ({props}) => {
    console.log(props);
    switch(props){
        case "one":
        return <h4>This is case one</h4>;
        case "Two":
    return <h4>This is case two</h4>;
    default:
        
        return <p>No case match</p>
    }
}


