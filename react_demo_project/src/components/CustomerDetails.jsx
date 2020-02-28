import React, { Component } from 'react'
import Axios from 'axios';
import Panel from "react-bootstrap/lib/Panel"

export default class CustomerDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {};
    }

    // Function will called by react once the component will load for first time.
    componentDidMount(){
        this.getCustomerDetails(this.props.val);
        console.log(this.props.val+ "value");
        
    }

    // Function with called whenever component gets updated
    componentDidUpdate(prevProps){
        if(this.props.val !== prevProps.val){
            this.getCustomerDetails(this.props.val);
        }
    }


    getCustomerDetails(id){
        Axios.get("samplejson/customer" + id + ".json").then(response => {
            console.log(response);
            this.setState({CustomerDetails:response});
            
        });
    }
    
    render() {

        console.log(this.state.CustomerDetails);
        if (!this.state.CustomerDetails) return <p>Loading Data ... </p>
        return (
            <div className = "customerdetails">
               <Panel >
                   <Panel.Heading>
                       <Panel.Title>
                           {this.state.CustomerDetails.data.name}
                       </Panel.Title>
                   </Panel.Heading>

                   <Panel.Body>
                        <p>Name: {this.state.CustomerDetails.data.name}</p>
                        <p>Email: {this.state.CustomerDetails.data.email}</p>
                        <p>Phone: {this.state.CustomerDetails.data.phone}</p>
                        <p>City: {this.state.CustomerDetails.data.cith}</p>
                        <p>State: {this.state.CustomerDetails.data.state}</p>
                        <p>Country: {this.state.CustomerDetails.data.country}</p>
                        <p>Organization: {this.state.CustomerDetails.data.organization}</p>
                        <p>Job Profile: {this.state.CustomerDetails.data.jobProfile}</p>
                        <p>Additional Information: {this.state.CustomerDetails.data.additionalInfo}</p>
                   </Panel.Body>
               </Panel>
            </div>
        )
    }
}
