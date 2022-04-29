import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtosInput: [],
    };
  }

  componentDidMount() {
    this.handleCategory();
  }

  handleCategory = async () => {
    const { match: { params: { id } } } = this.props;
    const products = await api.getProductsByProduct(id);
    this.setState({ produtosInput: products });
  }

  render() {
    const { produtosInput } = this.state;
    const { title, thumbnail, price, attributes } = produtosInput;
    const test = [];
    // const teste = [attributes];
    // console.log(attributes);
    // const { params } = match;
    // console.log(match);

    attributes.forEach((element) => {
      test.push(element);
    });
    console.log(test);

    return (
      <div data-testid="product-detail-name">
        <h4>
          {title}
        </h4>
        <img
          src={ thumbnail }
          alt="Imagem-do-Produto"
        />
        <div>
          {price}
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
/* <ul>
                Especificações técnicas:

                <li>
                  { elemento.name }
                  ,
                  {' '}
                  {elemento.value_name}
                </li>
              </ul> */
