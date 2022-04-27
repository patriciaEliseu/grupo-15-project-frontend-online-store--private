import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import * as api from './services/api';
import './App.css';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  //= > { console.log(categories); })
  componentDidMount() {
    api.getCategories().then((categories) => { console.log(categories); });
  }

  /*  recebeAPI = async () => {
    const api = await getCategories();
    this.setState({
      fetchAPI: api,
    });
  } */

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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
