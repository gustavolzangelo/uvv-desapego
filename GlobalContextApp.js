import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

import GlobalContext from './app/contexts/globalContext';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function GlobalContextApp() {
  const context = useContext(GlobalContext);
  console.log('context', context);
  return (
    <NavigationContainer theme={navigationTheme}>
      {context.signed ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
