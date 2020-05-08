import React from 'react';
import App from '../App';
import { Route } from 'react-router-dom'

function myRoutes() {
    return( 
     <div>   
        <Route path="/" exact component={App} /> 
    </div>
    );
  }


  export default myRoutes