import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import Buy from './pages/Buy/Buy';
import Rent from './pages/Rent/Rent';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/buy">
          <Buy />
        </Route>
        <Route path="/rent">
          <Rent />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
