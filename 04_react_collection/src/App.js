import React, { Component } from 'react';
import './App.css';
import ConditionalRendering from './components/conditionalRendering/ConditionalRendering';
import AboutKey from './components/Collections/AboutKey'
import TernaryRendering from './components/conditionalRendering/TernaryRendering'
import AboutRefs from './components/Reference/AboutRefs'
import HomePage from './components/ReactRouter/HomePage'
import ContactUs from './components/ReactRouter/ContactUs'
import AboutUs from './components/ReactRouter/AboutUs'
import {Route,Link, NavLink, BrowserRouter as Router,Redirect, Prompt} from 'react-router-dom'

const User = (params) => {
  return (<h1>Welcome User {params.username}</h1>)
  }

class App extends Component {

  state = {
    loggedIn:false
  };

  loginHandle = () =>{

    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render(){
    return (

      <div className="">
        <Router>
          <div>
  
            <ul>
              <li><NavLink activeStyle={{color:'green'}} exact to="/">Home</NavLink></li>
              <li><NavLink activeStyle={{color:'green'}} exact to ="/about">About</NavLink></li>
              <li><NavLink activeStyle={{color:'green'}} exact to ="/user/John">User John</NavLink></li>
              <li><NavLink activeStyle={{color:'green'}} exact to ="/user/peter">User Peter</NavLink></li>
            </ul>
            
            <Prompt>
              when={!this.state.loggedIn};
              message = {"Are you sure"}
            </Prompt>
            <input type="button" value={this.state.loggedIn? 'log Out' : 'login'} onClick={this.loginHandle}></input>
            <Route path="/"  exact render={
              () => {
                return (<h1>Welcome Home</h1>)
              }
            }></Route>
  
            <Route path="/about" exact strict render={
              () => {
                return (<h1>Welcome to About page</h1>)
              }
            }></Route>
            <Route path="/user/:username" exact strict render = {({match})=>{
              
              return this.state.loggedIn? (<User username ={match.params.username}></User>) : (<Redirect to="/"></Redirect>)
            }}></Route>
          </div>
        </Router>
      </div>
      // <BrowserRouter>
      //     <div className="App">
      //     <h1>Home Page</h1>
      //     <Route path="/" component={HomePage}></Route>
      //     <Route path="/aboutus" component={AboutUs}></Route>
      //     <Route path="/contactus" component={ContactUs}></Route>
  
      //     {/* create links using Link Class */}
      //     {/* <ul>
      //       <li><Link to="/">Home</Link></li>
      //       <li><Link to="/aboutus">About us</Link></li>
      //       <li><Link to="/contactus">Contact us</Link></li>
      //     </ul> */}
  
  
      //     <ul>
      //       <li><NavLink to="/" exact activeStyle ={{color:"red"}}>Home</NavLink></li>
      //       <li><NavLink to="/aboutus" exact activeStyle ={{color:"red"}}>ABout</NavLink></li>
      //       <li><NavLink to="/contactus" exact activeStyle ={{color:"red"}}>Contact</NavLink></li>
      //     </ul>
            
      //       <div>
      //         <ConditionalRendering></ConditionalRendering>
      //         <AboutKey></AboutKey>
      //         <TernaryRendering></TernaryRendering>
      //         <AboutRefs></AboutRefs>
      //       </div>
      //   </div>
  
      // </BrowserRouter>
      
    );
  }
}

export default App;
