import React from 'react';
import Home from '../../Home/Home';
import { pages } from './pages';
import './Beast-App.scss';

export default function BeastApp() {
  return (
    <div>
      <img className="bg" src="/beast/img/disney-castle.jpeg" />
      <header className="app-header">
        <Home pages={pages} />
      </header>
    </div>
  );
}
