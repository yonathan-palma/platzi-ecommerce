import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import useOrders from '../../hook/useOrders';

import { OrderCard } from '../../components/OrderCard';

export function MyOrder() {
  const { order } = useOrders();
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = order?.length - 1;
  return (
    <>
      <div className='flex w-80 justify-center relative mb-6'>
        <Link className=' absolute left-0' to='/my-orders'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80s'>
        {order[index]?.product.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.images}
            quantity={product.quantity}
          />
        ))}
      </div>
    </>
  );
}
