import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home.js";
import TestMe from "./test";

function App() {
  return (
    <div className="App">
      <TestMe />
      <img className="wolf-bg" src="/wolf/img/art.png" />
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
