import { createContext, useReducer, useState } from 'react';
import { initialState } from '../const';
import { cartReducer } from '../reducer/cart';
import { CART_ACTION_TYPES } from '../reducer/cart';
import PropTypes from 'prop-types';

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });
  };
  const removeFromCart = (product) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product,
    });
  };
  const clearCart = () => {
    dispatch({
      type: CART_ACTION_TYPES.CLEAR_CART,
    });
  };

  return { state, addToCart, removeFromCart, clearCart };
}
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
