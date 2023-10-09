import React, {useContext, createContext, useState, useEffect} from 'react';

const MyContext = createContext();

export function MyContextProvider({children, value}) {
  const [someData, setData] = useState(null);
  //   useEffect(() => {
  //     setData(value);
  //   }, [value]);
  //   const updateData = newData => {
  //     setData(newData);
  //   };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
export function useMyContext() {
  return useContext(MyContext);
}
