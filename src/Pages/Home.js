import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CardProdutos from './CardProdutos';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      inputName: '',
      produtosInput: [],
    };
  }

  componentDidMount() {
    this.apiGetCategories();
  }

  apiGetCategories = async () => {
    const apiGetCategories = await api.getCategories();
    this.setState({ categories: apiGetCategories });
  }

  getValorInput = ({ target }) => {
    const { name, value } = target;
    console.log(target);
    this.setState({ [name]: value }, () => {
      this.setState({
        inputName: value,
      });
      /* const { inputName } = this.state;
    console.log(inputName.length > 2); */
    });
    /* const { inputName } = this.state;
    console.log(inputName.length > 2); */
  }

  getPesquisar = async (event) => {
    event.preventDefault();
    // title,thumbnail, price
    const { inputName } = this.state; // já chega modificado aqui.
    const produtos = await api.getProductsByQuery(inputName);
    const { results } = produtos;
    this.setState({
      produtosInput: results,
    });
    /*  const { produtosInput } = this.state;
    console.log(produtosInput); */

    /* console.log(inputName);
    console.log(' teste func ok!'); */
  }

  render() {
    const { categories, inputName, produtosInput } = this.state;
    // console.log(produtosInput);
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

        {categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ id } data-testid="category">
              <input
                id={ id }
                name="category"
                value={ name }
                type="radio"
                onClick={ this.getValorInput }
              />
              {name}
            </label>
          </div>
        ))}
        {// title,thumbnail, price
          produtosInput.length === 0 ? <div> Nenhum produto foi encontrado </div>
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
/* {
          produtosInput.map((elemento) => (
            <div key={ elemento }>
              {
                elemento
              }

            </div>
          ))
        } */
