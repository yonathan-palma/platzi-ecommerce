import { useState } from 'react';

export default function useOrders() {
  const initialState = JSON.parse(window.localStorage.getItem('orders')) || [];
  const [order, setOrder] = useState(initialState);

  const updateOrdersStorage = (data) => {
    const newOrders = [...order, data];
    window.localStorage.setItem('orders', JSON.stringify(newOrders));
    setOrder(newOrders);
  };

  return { order, updateOrdersStorage };
}
