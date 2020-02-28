import React, { Component } from 'react'

export default class AboutProps extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Intro {this.props.name}</h2>
            <p>This is how you pass a props value to a class component</p>
            <h4>
                This is a default value of props: {this.props.value}
            </h4>

            </div>
        )
    }
}

AboutProps.defaultProps = {
    value:"Default value"
};
