import React, { Component } from 'react'

export default class workoutsComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            workouts : [
                {workout:"push up"},
                {workout:"pull up"},
                {workout:"dips"}
        ]
            
        }
    }
    
    render() {
        return (
            <div>
                {/* Accessing state */}
                <h1>Basic workouts</h1>

                <ul>{this.state.workouts.map(each_workout => {
                    return <li>{each_workout.workout}</li>
                })}</ul>
                
            </div>
        )
    }
}
