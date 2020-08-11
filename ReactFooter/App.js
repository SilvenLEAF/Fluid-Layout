import 'materialize-css/dist/css/materialize.min.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
 

  return (
    <BrowserRouter>

      <div className="App">
        <div id="wrapper">
          <Navbar/>

          <Switch>
            <Route exact path = "/" component={Home}/>             
          </Switch>
        </div>

        <div id="footer">
          <Footer/>
        </div>

      </div>
  
    </BrowserRouter>

  );
}

export default App;
