import React, { createContext, useState } from 'react';

export const languageOptions = {
  PT_BR: { name: 'Português (Brasil)', id: 'PT_BR' },
  EN_US: { name: 'English (United States)', id: 'EN_US' },
  ES: { name: 'Espanhol', id: 'ES' },
};

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [language, setLanguage] = useState(languageOptions.ES.id);

  return (
    <GlobalContext.Provider value={{ signed, setSigned, language, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
