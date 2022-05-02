import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      thumbnail: '',
      price: '',
      attributes: [],
    };
  }

  componentDidMount() {
    this.handleCategory();
  }

  handleCategory = async () => {
    const { match: { params: { id } } } = this.props;
    const products = await api.getProductsByProduct(id);
    const { title, thumbnail, price, attributes } = products;
    this.setState({
      title,
      thumbnail,
      price,
      attributes,
    });
  }

  render() {
    const { title, thumbnail, price, attributes } = this.state;

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
        <div>
          <ul>
            Especificações Técnicas
            {
              attributes.map((element, index) => (

                <li key={ index }>
                  {element.name}
                  :
                  {' '}
                  {element.value_name}
                </li>

              ))
            }
          </ul>
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
