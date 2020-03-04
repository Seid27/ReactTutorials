import React from 'react'


export default function AboutKey(){
    return (
        <div>
            <h2>React Collections (Keys and List)</h2>
            <List></List>
            <NewList></NewList>
            <TitleList></TitleList>
        </div>
    )
}

const nameList = ["Java", "JavasScript", "JavaEE", "ES6"];
const List = () => {
    return (<div>
        {nameList.map((names,index)=>{
            return <li key={index}>{names}</li>
        })}

    </div>)
}


const data = [
    {id:1, title:"First Data", content:"news"},
    {id:2, title:"Second Data", content:"RSS Feed"},
    {id:3, title:"Third Data", content:"Blog"},
    {id:4, title:"Four Data", content:"Live"}
]

const NewList = () => {
    return data.map((eachData)=>{
            return <li key= {eachData.id}>{eachData.id} {eachData.title}</li>
        })
        
}

const TitleList = () => {
    return data.map((eachData)=>{
            return <li key= {eachData.id}>{eachData.title} {eachData.content}</li>
        })
        
}


