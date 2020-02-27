import React from 'react';
import './App.css';
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MainSection from './components/MainSection'
import Clicker from './components/Clicker'

function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>

      <h1>This is React Intro page</h1>
      <MainSection></MainSection>
      <p>This is paragraph tag in App.js file</p>
      <Clicker></Clicker>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
