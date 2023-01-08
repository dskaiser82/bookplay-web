import React from 'react';
import './App.scss';
import Home from './pages/Home/Home.js';

function App() {
  return (
    <div className="App">
      <img className="wolf-bg"  src="/beast/img/disney-castle.jpeg"/>  
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;
