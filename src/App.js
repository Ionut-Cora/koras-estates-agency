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
        <Route exact path="/koras-estates-agency/#/" component={Home} />
        <Route path="/koras-estates-agency/#/buy" component={Buy} />
        <Route path="/koras-estates-agency/#/rent" component={Rent} />
        <Route path="/koras-estates-agency/#/about" component={About} />
        <Route path="/koras-estates-agency/#/contact" component={Contact} />
        <Route path="/koras-estates-agency/#/product/:productId" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
