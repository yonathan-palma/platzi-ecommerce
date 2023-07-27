export const totalPrice = (products) => {
  return products.reduce((acu, elem) => acu + elem.price * elem.quantity, 0);
};
