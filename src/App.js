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
        <Route exact path="/#/" component={Home} />
        <Route path="/#/buy" component={Buy} />
        <Route path="/#/rent" component={Rent} />
        <Route path="/#/about" component={About} />
        <Route path="/#/contact" component={Contact} />
        <Route path="/#/product/:productId" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
