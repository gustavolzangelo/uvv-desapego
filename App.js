import React, { useContext } from 'react';

import GlobalContext, { GlobalProvider } from './app/contexts/globalContext';
import GlobalContextApp from './GlobalContextApp';

export default function App() {
  const context = useContext(GlobalContext);
  console.log('context', context);
  return (
    <GlobalProvider>
      <GlobalContextApp />
    </GlobalProvider>
  );
}
