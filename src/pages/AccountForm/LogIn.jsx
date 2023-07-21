import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

LogIn.propTypes = {
  setViewForm: PropTypes.func,
};

export function LogIn({ setViewForm }) {
  const { session, user, setSessionInLocalStorage } = useAuth();
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-80'>
      <ul>
        <li>Email: {user?.email}</li>
        <li>Password {user?.password}</li>
      </ul>
      <button
        type='button'
        disabled={Object.entries(user).length == 0}
        className='bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2'
        onClick={() => {
          setSessionInLocalStorage(true);
          navigate('/');
        }}
      >
        <NavLink
          to='/'
          className={`${!session && 'pointer-events-none'}
        `}
        >
          Log in
        </NavLink>
      </button>

      <div className='text-center'>
        <a className='font-light text-xs underline underline-offset-4' href='/'>
          Forgot my password
        </a>
      </div>
      <button
        className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3'
        disabled={Object.entries(user).length > 0}
        onClick={() => setViewForm(true)}
      >
        Sign up
      </button>
    </div>
  );
}
