import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    address:'',
    img : '',
    name :'',
    id : ''
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser most be in use UserContext.Provider');
  }
  return context;
};
