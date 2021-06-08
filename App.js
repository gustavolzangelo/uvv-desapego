import React, { useContext } from 'react';

import GlobalContext, { GlobalProvider } from './app/contexts/globalContext';
import GlobalContextApp from './NavigationRoute';

export default function App() {
  const context = useContext(GlobalContext);
  console.log('context App', context);
  return (
    <GlobalProvider>
      <GlobalContextApp />
    </GlobalProvider>
  );
}
