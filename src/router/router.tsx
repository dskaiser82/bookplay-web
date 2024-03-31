import React from 'react';
import App from '../components/Story/SpiritWolf/App';
import BeastApp from '../components/Story/Beast/Beast-App';
import { Route } from 'react-router-dom';

function myRoutes() {
  return (
    <div>
      <Route path="/" exact component={App} />
      <Route path="/beauty" exact component={BeastApp} />
    </div>
  );
}

export default myRoutes;
