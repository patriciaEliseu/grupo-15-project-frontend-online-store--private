import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as api from '../services/api';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.apiCategory();
  }

  handleCategory = async ({ target }) => {
    const { handleCategory } = this.props;
    const { id } = target;
    await api.getProductsByCategory(id);
    await handleCategory(id);
  }

  apiCategory = async () => {
    const apiGetCategories = await api.getCategories();
    this.setState({ category: apiGetCategories });
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <form>
          {category.map(({ id, name }) => (
            <div key={ id }>
              <label htmlFor="category">
                <input
                  id={ id }
                  type="radio"
                  value={ name }
                  onChange={ this.handleCategory }
                  name="category"
                  data-testid="category"
                />
                {name}
              </label>
            </div>
          ))}
        </form>

      </div>
    );
  }
}

Category.propTypes = {
  handleCategory: propTypes.func.isRequired,
};

export default Category;
