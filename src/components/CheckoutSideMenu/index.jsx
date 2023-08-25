import { Link } from 'react-router-dom';
import { OrderCard } from '../OrderCard';
import { useCart } from '../../hook/useCart';
import useOrders from '../../hook/useOrders';

import { totalPrice } from '../../utils';

// import { XCircleIcon } from '@heroicons/react/24/solid';

export function CheckoutSideMenu() {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    setIsCheckoutSideMenuOpen,
  } = useCart();
  const { updateOrdersStorage } = useOrders();

  const totalProducts = (products) => {
    return products.reduce((acu, elem) => acu + elem.quantity, 0);
  };

  const handlecheckout = () => {
    const orderToAdd = {
      data: '01.02.23',
      product: cart,
      totalProducts: totalProducts(cart),
      totalPrice: totalPrice(cart),
    };
    updateOrdersStorage(orderToAdd);
    setIsCheckoutSideMenuOpen(false);
    clearCart();
  };

  return (
    <aside className='flex w-[calc(100%-4rem)] md:w-[360px] mx-8 flex-col fixed bg-white right-0 md:right-[64px] top-[68px] shadow-lg rounded-lg z-10'>
      <div className='flex justify-between items-center p-6 border-b-[3px] border-gray-100'>
        <h2 className=' font-medium text-lg'>My Order</h2>
        <div>
          {/* <button onClick={() => closeCheckoutSideMenu()}>
            <XCircleIcon className='h-6 w-6 text-black cursor-pointer' />
          </button> */}
        </div>
      </div>
      <div className='flex justify-center items-center p-4 flex-1'>
        <ul
          id='cart-list'
          className={`${
            cart.length > 0 && 'w-full'
          } space-y-6 overflow-y-scroll max-h-32`}
        >
          {cart?.map((product) => (
            <OrderCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              handleDelete={() => removeFromCart(product)}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>

        {cart.length == 0 && <p>Tu carrito es vacio</p>}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className=' font-light'>Total:</span>
          <span className=' font-medium text-2xl'>${totalPrice(cart)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button
            type='button'
            className=' w-full bg-orange-500 py-3 text-white rounded-lg'
            disabled={cart.length <= 0}
            onClick={() => handlecheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}
