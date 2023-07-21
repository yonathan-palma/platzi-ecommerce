export const totalPrice = (products) => {
  return products.reduce((acu, elem) => acu + elem.price, 0);
};
