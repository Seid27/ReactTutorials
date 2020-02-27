import React, { Component } from 'react'

export default class DemoClass extends Component {
    render() {
        return (
            <div>
                <ContentOne></ContentOne>
                <ContentTwo></ContentTwo>
                
            </div>
        )
    }
}

class ContentOne extends React.Component{
    render(){
        return (
            <div>
                <h1>This is COntent One</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non perspiciatis nostrum natus animi quaerat, accusamus, sit optio atque officiis ipsam modi laborum dicta, distinctio at mollitia possimus adipisci. Ipsa!</p>
            </div>
        )
    }
}

class ContentTwo extends React.Component{
    render(){
        return (
            <div>
                <h1>This is COntent Two</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non perspiciatis nostrum natus animi quaerat, accusamus, sit optio atque officiis ipsam modi laborum dicta, distinctio at mollitia possimus adipisci. Ipsa!</p>
            </div>
        )
    }
}
