import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { getProducts } from '../services/getProducts';

import PropTypes from 'prop-types';

CartProviderChimbo.propTypes = {
  children: PropTypes.node.isRequired,
};

export const CartContext = createContext();

export function CartProviderChimbo({ children }) {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToshow, setIsProductToshow] = useState({
    title: '',
    price: '',
    description: '',
    images: [],
  });
  const [cartProducts, setCartProducts] = useState([]);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //cart
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const OpenCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //orders
  const [order, setOrder] = useState([]);

  //get products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredProducts(filteredProductsByTitle(products, searchByTitle));
  }, [products, searchByTitle]);

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToshow,
        setIsProductToshow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        OpenCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
