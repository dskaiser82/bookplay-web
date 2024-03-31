// main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import myRoutes from './router/router'; // Import your routes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {myRoutes()} {/* Render your routes here */}
    </BrowserRouter>
  </React.StrictMode>
);
