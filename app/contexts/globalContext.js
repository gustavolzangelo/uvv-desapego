import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [signed, setSigned] = useState(true);

  return <GlobalContext.Provider value={{ signed, setSigned }}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
