import React from 'react';
import './App.scss';
import Home from './pages/Home/Home.js';

function App() {
  return (
    <div className="App">
      <img className="wolf-bg"  src="/wolf/img/art.png"/>  
      <header className="App-header">
        {/* Use a Prop */}
        <Home name="template1"/>
      </header>
    </div>
  );
}

export default App;
