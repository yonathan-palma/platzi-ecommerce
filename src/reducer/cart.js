export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

const updateLocalStorage = (state) => {
  return window.localStorage.setItem('cart', JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex((item) => item.id == id);
    console.log(productInCartIndex);
    if (productInCartIndex >= 0) {
      //structuredClone no es recomendable para arrays muy largos
      const newState = structuredClone(state);
      newState[productInCartIndex].quantity += 1;
      updateLocalStorage(newState);
      return newState;
    }
    const newState = [...state, { ...action.payload, quantity: 1 }];
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload;
    // const productInCartIndex = state.findIndex((item) => item == id);
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  },
};

export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
