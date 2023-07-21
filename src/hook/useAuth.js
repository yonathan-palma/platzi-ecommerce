import { useContext } from 'react';
import { AuthContext } from '../context/auth';

export function useAuth() {
  // const { session, setSession, user, setUser } = useContext(AuthContext);

  return useContext(AuthContext);
}
