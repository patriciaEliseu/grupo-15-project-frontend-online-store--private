import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CardProdutos from '../Pages/CardProdutos';

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
    console.log('render', produtosInput);
    // const { params } = match;
    // console.log(match);
    return (
      <div>
        {produtosInput.map(({ title }, index) => (
          <div key={ index }>
            <p>{title}</p>
          </div>
        ))}
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
