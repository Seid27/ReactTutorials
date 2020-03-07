import React from 'react'
import MultipleRendering from './MultipleRedering'

export default function ConditionalRendering() {
    return (
        <div>
            <List list= {users}></List>
            <MultipleRendering></MultipleRendering>
        </div>
    )
}

function List({list}){
    if(!list){
        return null;
    }
    else{
        return (
            <div>
                {list.map( (each_item)=>{
                    return <Item key ={each_item.id} item={each_item}></Item>
                })}
            </div>
        )
    }
}

const users = [
    {id:1, firstName:"Mike", lastName:"Miller"},
    {id:2, firstName:"John", lastName:"Smith"}
];

function Item ({item}){
    return (
        <div>
            <ul>
            <li>{item.firstName}
                {item.lastName}
            </li>
            </ul>
        </div>
    )
}
