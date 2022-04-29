import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
// import * as api from './services/api';
import './App.css';
import Details from './components/Details';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // teste
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shoppingcart" exact>
            <ShoppingCart />
          </Route>
          <Route path="/details" exact>
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
