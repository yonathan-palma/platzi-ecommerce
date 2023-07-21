import { useAuth } from '../../hook/useAuth';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateUser() {
  const { setSessionInLocalStorage, setAccountLocalStorage } = useAuth();
  const formulario = useRef(null);
  const navigate = useNavigate();
  const handleCreateUser = (e) => {
    e.preventDefault();
    const formData = new FormData(formulario.current);
    let { name, email, password } = Object.fromEntries(formData);
    setSessionInLocalStorage(true);
    setAccountLocalStorage({
      name,
      email,
      password,
    });
    navigate('/');
    // console.log(Object.fromEntries(formData));
  };
  return (
    <div className='flex flex-col w-80'>
      <form onSubmit={handleCreateUser} ref={formulario}>
        <div className='flex flex-col pb-4'>
          <label htmlFor='name'>Your name:</label>
          <input
            type='text'
            className=' border border-gray-400 rounded-lg p-2'
            name='name'
            id='name'
          />
        </div>
        <div className='flex flex-col pb-4'>
          <label htmlFor='name'>Your Email:</label>
          <input
            type='email'
            className=' border border-gray-400 rounded-lg p-2'
            name='email'
            id='email'
          />
        </div>
        <div className='flex flex-col pb-2'>
          <label htmlFor='name'>Your Password:</label>
          <input
            type='password'
            className=' border border-gray-400 rounded-lg p-2'
            name='password'
            id='password'
            autoComplete='on'
          />
        </div>
        <button
          type='submit'
          className='bg-black text-white  w-full rounded-lg py-3 mt-4 mb-2'
        >
          Create
        </button>
      </form>
    </div>
  );
}
