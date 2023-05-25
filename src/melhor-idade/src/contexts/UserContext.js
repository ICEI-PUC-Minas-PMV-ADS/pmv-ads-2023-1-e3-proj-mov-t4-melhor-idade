import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [nome, setNome] = useState('');
  const [id, setUserId] = useState('');

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        nome,
        setNome,
        id,
        setUserId,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, nome, setNome, id, setUserId } = context;
  return { signed, setSigned, nome, setNome, id, setUserId };
}
