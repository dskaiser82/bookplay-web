import React from 'react';
import Home from '../../Home/Home';
import { pages } from './pages';
import './App.scss';

export default function App() {
  return (
    <div>
      <img className="wolf-bg" src="/wolf/img/art.png" />
      <header className="app-header">
        <Home pages={pages} />
      </header>
    </div>
  );
}
