import React, {useContext, createContext, useState, useEffect} from 'react';
const UserContext = createContext({state: {}, actions: {}});

export function UserContextProvider({children, username}) {
  const [data, setData] = useState(username);
  useEffect(() => {
    setData(username);
  }, [username]);

  const value = {state: {data}, actions: {setData}};

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
