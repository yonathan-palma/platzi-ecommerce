import { useCart } from '../../hook/useCart';
//icons
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export function Cart() {
  const { cart, isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen } = useCart();
  const totalProducts = (products) => {
    return products.reduce((acu, elem) => acu + elem.quantity, 0);
  };
  return (
    <>
      <div>
        <button
          className='flex'
          onClick={() => {
            setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);
          }}
        >
          <ShoppingBagIcon className='h-6 w-6' />
          {totalProducts(cart)}
        </button>
      </div>
    </>
  );
}
