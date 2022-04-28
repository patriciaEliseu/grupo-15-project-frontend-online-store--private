// titulo, foto e preço
// title,thumbnail, price
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardProdutos extends Component {
  render() {
    const { title, thumbnail, price, keyNumber } = this.props;
    return (
      <div data-testid="product" key={ keyNumber }>
        <h4>
          { title }
        </h4>
        <img
          src={ thumbnail }
          alt="Imagem-do-Produto"
        />
        <div>
          { price }
        </div>
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
