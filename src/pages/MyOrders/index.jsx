import { Link } from 'react-router-dom';
import useOrders from '../../hook/useOrders';

import { OrdersCard } from '../../components/OrdersCard';

export function MyOrders() {
  const { order } = useOrders();
  return (
    <>
      <div className='flex w-80 justify-center relative'>
        <h1>MyOrders</h1>
      </div>
      {order?.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </>
  );
}
