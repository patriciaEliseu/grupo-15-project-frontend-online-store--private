import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
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

Details.propTypes = {

  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  keyNumber: PropTypes.number,

}.isRequired;

export default Details;
