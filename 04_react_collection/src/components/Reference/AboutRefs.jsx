import React, { Component } from 'react'

export default class AboutRefs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }

        this.callRef = React.createRef();
    } 
    
    render() {
        return (
            <div>
                <h2>Demo of React Reference</h2>
                <input type="text" ref={this.callRef.focus} />
            </div>
        )
    }
}
