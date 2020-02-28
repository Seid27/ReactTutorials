import React, { Component } from 'react'
import Proptypes from 'prop-types';

export default class AboutPropsValidation extends Component {
    //props type is a react library used for datatype validation
    render() {
        return (
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Boolean: {this.props.propBool ? "true" : "false"}</h3>
                <h3>Function: {this.props.propFunc}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject}</h3>
                
            </div>
        )
    }
}

AboutPropsValidation.propTypes = {
    propArray: Proptypes.array.isRequired,
    propBool: Proptypes.bool.isRequired,
    propFunc: Proptypes.func,
    propNumber: Proptypes.number,
    propString: Proptypes.string,
    propObject: Proptypes.object
}

AboutPropsValidation.defaultProps = {
    propArray: [11,22,33],
    propBool: true,
    propFunc: function(args){
        return args;
    },
    propNumber: 11,
    propString: "Str"
}

