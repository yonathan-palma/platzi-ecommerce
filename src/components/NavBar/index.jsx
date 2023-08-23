import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { menu1 } from '../../const';

//hook
import { useAuth } from '../../hook/useAuth';
import { Cart } from '../Carrito';
import { useCart } from '../../hook/useCart';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { session, user, setSessionInLocalStorage } = useAuth();
  const { setIsCheckoutSideMenuOpen } = useCart();
  const activeStyle =
    'underline underline-offset-[39px] decoration-orange-500 decoration-[3px]';

  return (
    <nav className='main-header flex justify-between items-center fixed z-10 top-0 w-full px-6 md:px-32 text-sm font-light bg-white'>
      <div className='w-full flex items-center border-b-[3px] border-gray-200 gap-4 h-24'>
        <button
          className={`navbar-toggler relative mt-3 z-20 md:hidden ${
            isOpen ? 'show' : ''
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
            setIsCheckoutSideMenuOpen(false);
          }}
          type='button'
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        {isOpen && (
          <div
            className={`fixed inset-0 z-0 bg-gray-300/60 backdrop-blur`}
            aria-hidden='true'
          ></div>
        )}
        <div
          className={`navbar-collapse absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20 ${
            isOpen ? 'show' : '' //por que diablos si pongo hidden no se hacela animacion
          }`}
          tabIndex='-1'
        >
          <div className='space-y-4'>
            {session && (
              <li className='block text-base leading-7 tracking-tight text-gray-700'>
                {user?.email}
              </li>
            )}
            {session && (
              <NavLink
                to='/my-orders'
                className='block text-base leading-7 tracking-tight text-gray-700'
                onClick={() => setIsOpen(!isOpen)}
              >
                My Orders
              </NavLink>
            )}
            {session && (
              <li className='block text-base leading-7 tracking-tight text-gray-700'>
                My Account
              </li>
            )}
          </div>
          <div className='mt-8 flex flex-col gap-4'>
            <NavLink
              to='/sing-in'
              className='inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80'
              onClick={() => setIsOpen(!isOpen)}
            >
              sing in
            </NavLink>
          </div>
        </div>

        <div className='navbar_brand flex-1 md:flex-initial'>
          <NavLink
            className='font-semibold text-4xl pr-4'
            to={session ? '/' : 'sing-in'}
          >
            Shopi
          </NavLink>
        </div>
        <ul className='hidden md:flex items-center gap-4 flex-1 h-full decoration-t'>
          {menu1.map((item) => (
            <li key={item.text} className={item.className}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? `h-full flex items-center ${activeStyle}`
                    : 'h-full flex items-center'
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className='hidden md:flex items-end gap-3'>
          {session && <li className=' text-orange-500'>{user?.email}</li>}
          {session && (
            <NavLink
              to='/my-orders'
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          )}
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
        </ul>
        <Cart />
      </div>
    </nav>
  );
}
