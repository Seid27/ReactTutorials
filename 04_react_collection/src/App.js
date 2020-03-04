import React from 'react';
import './App.css';
import ConditionalRendering from './components/conditionalRendering/ConditionalRendering';
import AboutKey from './components/Collections/AboutKey'

function App() {
  return (
    <div className="App">
      <div>
        <h3>ConditionalRendering</h3>
        <ConditionalRendering></ConditionalRendering>
        <AboutKey></AboutKey>
      </div>

    </div>
  );
}

export default App;
