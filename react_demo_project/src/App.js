import React from 'react';
import './App.css';
import Customer from './components/Customer'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Customer></Customer>
      <Router>
        <div className="App-header">
          <header>
            <h1 className="App-title">Customer List with Details</h1>
          </header>
          <Switch>
            <Route exact path="/" render={()=> <Redirect to="/customerlist"></Redirect>}>
            </Route>

            <Route exact path="/customerlist" compnent ={Customer}></Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}



export default App;
