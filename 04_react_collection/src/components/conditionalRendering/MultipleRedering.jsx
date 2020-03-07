import React, { Component } from 'react'


/**
 * show the if click the user is logged in and user can logout 
 * we need display different information when user logged in or logged out
 */
export default class MultipleRedering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }


    handleLogin = ()=> {
        this.setState({isLoggedIn:true});
    }

    handleLogOut = ()=>{
        this.setState({isLoggedIn:false});
    }
    
    render() {
        return (
            <div>
                <h2>This is multiple Rendering example </h2>
                <Message props={this.state.isLoggedIn}>
                </Message>
                {console.log("messahe" + this.state.isLoggedin)}
                {this.state.isLoggedIn?(
                    <LogOut clickInfo={this.handleLogOut}></LogOut>
                ) : (<Login clickInfo={this.handleLogin}></Login>)}


            </div>
        )
    }
}


const Message = ({props}) => {
        if(props){
            return <h3>Welcome Back User</h3>
        }
        else{
            return <h3>please Login first</h3>
        }
}

const Login = (props) =>{
    return (<button onClick={props.clickInfo}>Login</button>)
};

const LogOut = (props) => {
    return <button onClick={props.clickInfo}>Logout</button>
}
