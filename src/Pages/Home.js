import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CardProdutos from './CardProdutos';
import Category from '../components/Category';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      produtosInput: [],
    };
  }

  // pesquisa pelo nome na api
  getPesquisar = async () => {
    const { inputName } = this.state;
    const products = await api.getProductsByQuery(inputName);
    this.setState({ produtosInput: products.results }); // armazena o que foi pesquisado no estado
  }

  // pesquisa pelo ID as categorias já disponibilizadas na tela
  handleCategory = async (categoryId) => {
    const products = await api.getProductsByCategory(categoryId);
    this.setState({ produtosInput: products.results });
  }

  // pega o valor do input que o usuário digita para pesquisar na função getPesquisar
  getValorInput = ({ target }) => {
    const { value } = target;
    this.setState({ inputName: value });
  }

  render() {
    const {
      inputName,
      produtosInput,
    } = this.state;
    return (
      <div>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <label htmlFor="input">
          Pesquisar
          <input
            onChange={ this.getValorInput }
            data-testid="query-input"
            name="inputName"
            type="text"
            value={ inputName }
          />
        </label>
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.getPesquisar }
        >
          Pesquisar
        </button>

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

        <Category handleCategory={ this.handleCategory } />

        {// title,thumbnail, price
          produtosInput.length === 0
            ? <div> Nenhum produto foi encontrado </div>
            : produtosInput.map(({ title, thumbnail, price, id }, index) => (

              <CardProdutos
                key={ index }
                keyNumber={ id }
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
              />
            ))
        }
      </div>
    );
  }
}

export default Home;
