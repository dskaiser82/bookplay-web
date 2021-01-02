import React from 'react';
import ReactDOM from 'react-dom';
import myRoutes from './router/router.js'
import { BrowserRouter } from 'react-router-dom'

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      {myRoutes()}
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
