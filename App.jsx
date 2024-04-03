import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerMenu from './app/menu/DrawerMenu';
const Stack = createNativeStackNavigator();

import AppContextProvider from './app/context/AppContextProvider';

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Menu'
            component={DrawerMenu}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
