import React, { Component } from 'react'
import Axios from 'axios';

export default class CustomerDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {};
    }

    // Function will called by react once the component will load for first time.
    componentDidMount(){
        this.getCustomerDetails(this.props.value);
    }

    // Function with called whenever component gets updated
    componentDidUpdate(previous){
        if(this.prevProps !== prevProps.value){
            this.getCustomerDetails(this.props.value);
        }
    }


    getCustomerDetails(id){
        Axios.get("samplejson/customer" + id + ".json").then(response => {
            this.setState({CustomerDetails:response});
        });
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
