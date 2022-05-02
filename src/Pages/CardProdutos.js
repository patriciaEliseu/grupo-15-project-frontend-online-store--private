// titulo, foto e preço
// title,thumbnail, price
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addProduto } from '../services/localStorage';

class CardProdutos extends Component {
  adicionarProduto = () => {
    const { elemento } = this.props;
    addProduto(elemento);
  };

  // resultado[elemento1.location].push({ [elemento1.name]: buscando });
  // const readFavoriteSongs = () => JSON.parse(localStorage.getItem(PRODUTOS));

  render() {
    const { title, thumbnail, price, keyNumber } = this.props;
    return (
      <div data-testid="product" key={ keyNumber }>
        <h4>
          {title}
        </h4>
        <Link
          to={ `/details/${keyNumber}` }
          data-testid="product-detail-link"
        >
          <img
            src={ thumbnail }
            alt="Imagem-do-Produto"
          />
        </Link>
        <div>
          R$
          {' '}
          {price}
        </div>
        <button
          data-testid="product-add-to-cart"
          type="submit"
          onClick={ this.adicionarProduto }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

CardProdutos.propTypes = {

  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  keyNumber: PropTypes.number,

}.isRequired;
export default CardProdutos;
