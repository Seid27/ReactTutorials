import React, { Component } from 'react'

export default class About extends Component {

    //rconst shortcut to create a costructor
    //constructor is optional but a better way to initialize a state
    constructor(props) {
        super(props)


        // states are immutable
        this.state = {
            displayInfo: false
        }

        this.toggleDisplayInfo = this.toggleDisplayInfo.bind(this);
    }


    //{displayInfo: !this.state.displayInfo} is the argument used to set the state 
    toggleDisplayInfo(){
        this.setState({displayInfo: !this.state.displayInfo})

    }
    
    render() {
        return (
            <div>
            <br>
            </br>
            <hr></hr>

            <h1>About State Updates and binding ....</h1>

            {
                this.state.displayInfo ? (
                    <div>

                        

                        <p>
                            Displays detail information
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam laboriosam commodi aliquid eos voluptates distinctio ducimus tempora. Reiciendis, iure quibusdam vitae iste incidunt autem a illo aliquam totam sequi eos.
                        </p>
                        <button onClick={this.toggleDisplayInfo} className="btn btn-success">
                            show less
                        </button>
                    </div>
                ):(
                    <div onClick={this.toggleDisplayInfo}
                    className="btn btn-success">
                        Read More

                    </div>
                )
            }
                
            </div>
        )
    }
}
