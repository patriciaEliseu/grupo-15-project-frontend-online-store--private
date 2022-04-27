import React from 'react';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import * as api from './services/api';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // teste
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
    // console.log(fetchAPI);
    return (
      <div>
        Trabalho
      </div>
    );
  }
}

export default App;
