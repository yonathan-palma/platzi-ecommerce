import { useContext } from 'react';
import { CartContext } from '../../context';
import { Link } from 'react-router-dom';
import { OrderCard } from '../OrderCard';
import { useCart } from '../../hook/useCart';

import { totalPrice } from '../../utils';

// import { XCircleIcon } from '@heroicons/react/24/solid';

export function CheckoutSideMenu() {
  const { setCartProducts, order, setOrder, setSearchByTitle } =
    useContext(CartContext);
  const { cart, addToCart, removeFromCart } = useCart();

  const handlecheckout = () => {
    const orderToAdd = {
      data: '01.02.23',
      product: cart,
      totalProducts: cart.length,
      totalPrice: totalPrice(cart),
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setSearchByTitle(null);
  };

  return (
    <aside className='flex w-[360px] h-[calc(100vh-70px)] flex-col fixed bg-white right-0 top-[68px] border border-black rounded-lg z-10'>
      <div className='flex justify-between items-center p-6'>
        <h2 className=' font-medium text-xl'>My Order</h2>
        <div>
          {/* <button onClick={() => closeCheckoutSideMenu()}>
            <XCircleIcon className='h-6 w-6 text-black cursor-pointer' />
          </button> */}
        </div>
      </div>
      <div className=' p-4 overflow-y-scroll  flex-1'>
        {cart?.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.images}
            quantity={product.quantity}
            handleDelete={() => removeFromCart(product)}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className=' font-light'>Total:</span>
          <span className=' font-medium text-2xl'>${totalPrice(cart)}</span>
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
