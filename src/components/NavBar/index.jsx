import { NavLink } from 'react-router-dom';
import { menu1 } from '../../const';
import { useContext } from 'react';
import { CartContext } from '../../context';

//hook
import { useAuth } from '../../hook/useAuth';

//icons
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export function Navbar() {
  const { session, setSessionInLocalStorage } = useAuth();
  const activeStyle = 'underline underline-offset-4';
  const classNavLink = (isActive) => {
    if (isActive) return activeStyle;
    if (!session) return 'pointer-events-none';
    return undefined;
  };
  const { products, OpenCheckoutSideMenu } = useContext(CartContext);
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-32 text-sm font-light'>
      <div className='w-full flex justify-between border-b-[3px] border-gray-200 pb-8'>
        <ul className='flex items-end gap-4'>
          <li className='font-semibold text-3xl pr-4 no-underline'>
            <NavLink to='/'>Shopi</NavLink>
          </li>
          {menu1.map((item) => (
            <li key={item.text} className={item.className}>
              <NavLink
                to={item.to}
                className={({ isActive }) => classNavLink(isActive)}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className='flex items-end gap-3'>
          {session && <li className=' text-blue-50'>Email@gmail.com</li>}
          {session && <li>My Orders</li>}
          {session && <li>My Account</li>}

          <li>
            <NavLink
              to='/sing-in'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => setSessionInLocalStorage(false)}
            >
              Sing In
            </NavLink>
          </li>

          <li
            className='flex cursor-pointer'
            onClick={() => {
              OpenCheckoutSideMenu();
            }}
          >
            <ShoppingCartIcon className='h-6 w-6 text-black' />
            {products.length}
          </li>
        </ul>
      </div>
    </nav>
  );
}
