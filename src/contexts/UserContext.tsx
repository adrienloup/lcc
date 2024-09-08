import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ChildrenType } from '../models/ChildrenType';

export const UserContext = createContext<{
  user: {
    id: number;
    name: string;
    email: string;
  };
  setUser: (user: { id: number; name: string; email: string }) => void;
}>({
  user: {
    id: 0,
    name: '',
    email: '',
  },
  setUser: (user: { id: number; name: string; email: string }) => user,
});

export function UserProvider({ children }: ChildrenType) {
  const [user, setUser] = useLocalStorage('_lcc_1em0m_3_user', {
    id: 0,
    name: '',
    email: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
