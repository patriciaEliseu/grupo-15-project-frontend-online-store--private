import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Category extends Component {
  async handle({ target }) {
    const { handleCategory } = this.props;
    const { id } = target;
    await api.getCategories(id);
    await handleCategory(id);
  }

  render() {
    return (
      <div>
        <p>Category</p>
      </div>
    );
  }
}

Category.propTypes = {
  handleCategory: PropTypes.func,
}.isRequired;

export default Category;
