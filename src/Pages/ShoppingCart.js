import React, { Component } from 'react';
import { getFavoriteProduto } from '../services/localStorage';
import CardProdutos from './CardProdutos';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      produtosLocalStorage: getFavoriteProduto(),
      NUMERO: 0,
    };
  }

  componentDidMount() {
    this.numberMais();
  }

  numberMais = () => {
    //const { NUMERO } = this.state;
    this.setState((prevent) => ({
      NUMERO: prevent.NUMERO + 1,
    }));
    //console.log(NUMERO);
  }

  render() {
    const { produtosLocalStorage, NUMERO } = this.state;
    return (
      <div>
        {
          produtosLocalStorage.length === 0
            ? <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
            : produtosLocalStorage.map((element, index) => (
              <div key={ index }>
                <h4 data-testid="shopping-cart-product-name">
                  {element.title}
                </h4>
                <img
                  src={ element.thumbnail }
                  alt="Imagem-do-Produto"
                />
                <div>
                  R$
                  {element.price}
                </div>
                <input
                  data-testid="shopping-cart-product-quantity"
                  type="number"
                  defaultValue="1"
                  /* value={
                    produtosLocalStorage.forEach((valor) => {
                      if (valor.title === element.title) {
                        return NUMERO;
                      }
                      return NUMERO;
                    })
                  } */
                  /* value={ NUMERO }
                  onClick={ this.numberMais } */
                />
              </div>

            ))
        }
      </div>
    );
  }
}

export default ShoppingCart;
{ /* <CardProdutos
                key={ index }
                keyNumber={ element.id }
                title={ element.title }
                thumbnail={ element.thumbnail }
                price={ element.price }
                elemento={ element }
              /> */ }

/*   */
