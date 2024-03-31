// router.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

import App from '../components/Story/SpiritWolf/App';
import BeastApp from '../components/Story/Beast/Beast-App';

function myRoutes() {
  return (
    <Routes>
      {/* Wrap your routes within a <Routes> component */}
      <Route path="/" element={<App />} />{' '}
      {/* Use the 'element' prop to render the component */}
      <Route path="/beauty" element={<BeastApp />} />{' '}
      {/* Use the 'element' prop to render the component */}
    </Routes>
  );
}

export default myRoutes;
