import { useContext } from 'react';
import { FilterContext } from '../context/filters';

export default function useFilters() {
  const { filters, setFilters, products, setProducts } =
    useContext(FilterContext);

  const filterProducts = (products, category) => {
    return products.filter((product) => {
      const regex = new RegExp(filters, 'gi');
      return (
        (category == '' || category == product.category) &&
        (filters == '' || product.title.match(regex))
      );
    });
  };
  return { filters, setFilters, filterProducts, products, setProducts };
}
