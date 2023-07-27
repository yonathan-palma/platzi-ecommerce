import { NavLink } from 'react-router-dom';
import { menu1 } from '../../const';

//hook
import { useAuth } from '../../hook/useAuth';
import { Cart } from '../Carrito';

export function Navbar() {
  const { session, user, setSessionInLocalStorage } = useAuth();
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-32 text-sm font-light'>
      <div className='w-full flex items-end border-b-[3px] border-gray-200 gap-4 pb-8'>
        <ul className='flex items-end gap-4 flex-1'>
          <li className='font-semibold text-3xl pr-4 no-underline'>
            <NavLink to={session ? '/' : 'sing-in'}>Shopi</NavLink>
          </li>
          {menu1.map((item) => (
            <li key={item.text} className={item.className}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className='flex items-end gap-3'>
          {session && <li className=' text-blue-50'>{user?.email}</li>}
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
        </ul>
        <Cart />
      </div>
    </nav>
  );
}
