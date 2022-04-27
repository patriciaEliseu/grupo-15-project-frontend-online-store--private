import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.apiGetCategories();
  }

  apiGetCategories = async () => {
    const apiGetCategories = await api.getCategories();
    this.setState({ categories: apiGetCategories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          <img
            className="shoppingcart"
            src="https://svgsilh.com/svg/155226.svg"
            alt="carrinho-de-compras"
          />
        </Link>

        {categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ id } data-testid="category">
              <input
                id={ id }
                name="category"
                value={ name }
                type="radio"
              />
              {name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
