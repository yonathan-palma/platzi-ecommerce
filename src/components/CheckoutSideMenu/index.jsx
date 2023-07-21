import { useContext } from 'react';
import { CartContext } from '../../context';
import { Link } from 'react-router-dom';
import { OrderCard } from '../OrderCard';

import { totalPrice } from '../../utils';

import { XCircleIcon } from '@heroicons/react/24/solid';

export function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchByTitle,
  } = useContext(CartContext);

  const handleDelete = (id) => {
    const filteredProduct = cartProducts.filter((product) => product.id !== id);
    setCartProducts(filteredProduct);
  };

  const handlecheckout = () => {
    const orderToAdd = {
      data: '01.02.23',
      product: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setSearchByTitle(null);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } w-[360px] h-[calc(100vh-70px)] flex-col fixed bg-white right-0 top-[68px] border border-black rounded-lg z-10`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className=' font-medium text-xl'>My Order</h2>
        <div>
          <button onClick={() => closeCheckoutSideMenu()}>
            <XCircleIcon className='h-6 w-6 text-black cursor-pointer' />
          </button>
        </div>
      </div>
      <div className=' p-4 overflow-y-scroll  flex-1'>
        {cartProducts?.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.images}
            handleDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className=' font-light'>Total:</span>
          <span className=' font-medium text-2xl'>
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button
            type='button'
            className=' w-full bg-black py-3 text-white rounded-lg'
            onClick={() => handlecheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}
