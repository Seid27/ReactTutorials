import React, { Component } from 'react'

export default class ABoutLifcycle extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h2>This section is about class component lifecycle</h2>
                <ol style = {{textAlign:"left"}}>
                    <li>Initial Phase(Birth of the component)</li>
                    <br/>
                    <ul>
                    <li> <strong>getDefaultProps()</strong> 
                        <p>Its used to specify the dfault value of the this.props</p>
                    </li>
                    
                    <li> <strong>getInitialState()</strong>  
                        <p>This function will invoke before creation of component</p>
                    </li>
                    </ul>
                    
                    <li>Mounting Phase

                        <ul>
                            <li>Constructor</li>
                            <li>Static getDerivedStateFromProps()</li>
                            <li>render</li>
                            <li>componentDidMount</li>
                        </ul>

                    </li>
                    <li>Updating Phase
                        <ul>
                            <li>static getDerivedStateFromProps</li>
                            <li>shouldComponentMount</li>
                            <li>render</li>
                            <li>getSnapshotbeforeUpdate</li>
                            <li>componentDidUpdate</li>
                        </ul>
                    </li>
                    <li>Unmounting Phase
                        <ul>
                            <li>componenetWillUnmount</li>
                        </ul>
                    </li>

                    <li>WorkFlow
                        <WorkFlow value={"google"} ></WorkFlow>
                    </li>
                </ol>
            </div>
        )
    }
}

class WorkFlow extends Component {

    //first pahse for mounting
    constructor(props) {
        super(props)
    
        this.state = { 
             
        }

        // console.log("Constructor phase1 for mounting");
        console.log(props.value);
        
        
    }

    //second Phase for mounting
    static getDerivedStateFromProps(props, state){
        console.log("second " + props.value);
        console.log("second " + state.webpage);
        console.log("second Phase of mounting");
        return {};
    }

    //fourth phase  for mounting
    componentDidMount(){
        console.log("Forth phase mounting");
    }

    //fifth step (update)

    
    render() {

        console.log("Third phase of mounting");
        
        return (
            <div>
                <h1>This is workflow</h1>
            </div>
        )
    }
}