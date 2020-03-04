import React from 'react';
import About_Const from './Topics/01_Constructor/About_Const'
import AboutCompApi from './Topics/02_Component_API/AboutCompApi'

import './App.css';
import ABoutLifcycle from './Topics/03_Lifecycle/ABoutLifcycle';
import ABoutFuncComp from './Topics/03_Lifecycle/ABoutFuncComp';


function App() {
  return (
    <div className="App">
      {/* <About_Const></About_Const> */}
      {/* <AboutCompApi></AboutCompApi>
      <ABoutLifcycle></ABoutLifcycle> */}

      <ABoutFuncComp></ABoutFuncComp>
    </div>
  );
}

export default App;
