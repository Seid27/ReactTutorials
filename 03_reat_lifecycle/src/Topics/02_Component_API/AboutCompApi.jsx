import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class AboutCompApi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg: "welcome to setstate"
        }
    }

    update = () => {
        this.setState({
            msg: "Its a react setState tutorial"
        });
    }


    //envoked after render 
    forceUpdateState = () =>{
        this.forceUpdate();
    }


    findDomNodeOne = () => {
        let myDiv = document.getElementById("myDivOne");
        ReactDOM.findDOMNode(myDiv).style.color = "red";
    }

    findDomNodeTwo = () => {
        let myDiv = document.getElementById("myDivTwo");
        ReactDOM.findDOMNode(myDiv).style.color = "blue";
    }
    
    render() {
        return (
            <div>
                <hr/>
                <h2>React component API functions</h2>
                <p style={{textAlign:"left"}}>
                    React component functions allow us to create element, transform element and fragment
                </p>

                <ul>
                    <li>setState() is to update default state object</li>
                    <li>forceUpdate() allows us to update component manually <br/>
                    Component.forceUpdate(callback)</li>
                    <li>findDOMNode()</li>
                </ul>


                <div>
                    <h3>{this.state.msg}</h3>
                    <button onClick={this.update}>Click at update state</button>
                </div>

                <div>
                    <h3>Example of forceUpdate() </h3>
        <p>Random number: {Math.random()}</p>
        <button onClick={this.forceUpdateState}>ForceUpdate</button>
                </div>

                <div>
                    <button onClick={this.findDomNodeOne}>Find DOM Node One</button>
                    <button onClick={this.findDomNodeTwo}>Find DOM Node Two</button>
                    <h3 id="myDivOne">Node One</h3>
                    <h3 id="myDivTwo">Node Two</h3>
                </div>
                
            </div>
        )
    }
}
