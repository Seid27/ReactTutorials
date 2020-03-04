import React, { Component } from 'react'

export default class About_Const extends Component {
    /**
     * Constructor in class
     * Always call super class consructor
     * super call must be first before thsi.state
     * 
     */

     constructor(props) {
         super(props)
     
         this.state = {

            data: "About React Constructor call"
         } 

         this.diplayText = this.displayText.bind(this);
     }


     diplayText(){
         return this.state.data;
     }
     
    render() {
        return (
            <div>
                <h2>This React Constructor call Example</h2>
                <div></div>
                <button onClick={this.diplayText} >Click to See data</button>

                <ul>
                    <li>It is neccessary to have constructor in every class (optional)</li>
                    <li>Constructor must call super class before any states</li>
                    <li>Constructor must bind the normal functions inside scope</li>
                    <li>Arrow function does not need to be binded</li>
                    <li>use "this" key word inside the class and constructor</li>
                </ul>
            </div>
        )
    }
}
