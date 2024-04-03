import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
      />
      <Drawer.Screen
        name='Login'
        component={LoginScreen}
      />
      <Drawer.Screen
        name='Profile'
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
}
