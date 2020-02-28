import React, { Component } from 'react'
import Proptypes from 'prop-types';

export default class CheckValidity extends Component {
    render() {
        return (
            <div>

                {
        this.props.propString? <td>{this.props.value}</td> :
                "undifined"}
            </div>
        
        )
    }
}

CheckValidity.propTypes = {
    propArray: Proptypes.array.isRequired,
    propBool: Proptypes.bool.isRequired,
    propFunc: Proptypes.func,
    propNumber: Proptypes.number,
    propString: Proptypes.string
}

CheckValidity.defaultProps = {
    propArray: [11,22,33],
    propBool: true,
    propFunc: function(args){
        return args;
    },
    propNumber: 11,
    propString: "Str"
}


