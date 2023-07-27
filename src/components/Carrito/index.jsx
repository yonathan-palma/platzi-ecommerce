import { useCart } from '../../hook/useCart';
//icons
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export function Cart() {
  const { cart, isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen } = useCart();
  return (
    <>
      <div>
        <button
          className='flex'
          onClick={() => {
            setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);
          }}
        >
          <ShoppingCartIcon className='h-6 w-6 text-black' />
          {cart.length}
        </button>
      </div>
    </>
  );
}
