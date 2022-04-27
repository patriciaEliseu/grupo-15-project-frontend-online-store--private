import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <img href="/shoppingcart" src="https://svgsilh.com/svg/155226.svg" alt="carrinho-de-compras" />
      </div>
    );
  }
}

export default Home;
