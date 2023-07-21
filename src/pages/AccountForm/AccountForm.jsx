import { useState } from 'react';
import { CreateUser } from './CreateUser';
import { LogIn } from './LogIn';

export function AccountForm() {
  const [viewForm, setViewForm] = useState(false);
  return (
    <>
      <h1 className='font-medium text-xl text-center mb-6 w-80'>Welcome</h1>
      {!viewForm ? <LogIn setViewForm={setViewForm} /> : <CreateUser />}
    </>
  );
}
