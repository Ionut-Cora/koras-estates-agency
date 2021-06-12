import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import Buy from './pages/Buy/Buy';
import Rent from './pages/Rent/Rent';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/koras-estates-agency/#/">
          <Home />
        </Route>
        <Route path="/koras-estates-agency/#/buy">
          <Buy />
        </Route>
        <Route path="/koras-estates-agency/#/rent">
          <Rent />
        </Route>
        <Route path="/koras-estates-agency/#/about">
          <About />
        </Route>
        <Route path="/koras-estates-agency/#/contact">
          <Contact />
        </Route>
        <Route path="/koras-estates-agency/#/product/:productId">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
