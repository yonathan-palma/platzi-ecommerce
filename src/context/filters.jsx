import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState('');
  const [products, setProducts] = useState([]);
  return (
    <FilterContext.Provider
      value={{ filters, setFilters, products, setProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
}
