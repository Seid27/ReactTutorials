import React from 'react';
import './App.css';
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MainSection from './components/MainSection'
import Clicker from './components/Clicker'

import About from './components/About'
import AboutProps from './components/AboutProps'

import AboutFuncProps from './components/AboutFuncProps'
import AboutPropsValidation from './components/AboutPropsValidation'
import DataTypesValidation from './components/DataTypesValidation'

function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>

      <h1>This is React Intro page</h1>
      <MainSection></MainSection>
      <p>This is paragraph tag in App.js file</p>
      <Clicker></Clicker>
      <About></About>
      <AboutProps ></AboutProps>
      <AboutPropsValidation></AboutPropsValidation>
      <AboutFuncProps name=" to Function props" value={"This is value"}></AboutFuncProps>
      <DataTypesValidation></DataTypesValidation>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
