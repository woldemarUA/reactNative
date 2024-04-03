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
        name='Connecter'
        component={LoginScreen}
        initialParams={{ mode: 'login', titre: 'Connecter' }}
      />
      <Drawer.Screen
        name="S'inscrire"
        component={LoginScreen}
        initialParams={{ mode: 'register', titre: "S'inscrire" }}
      />
      <Drawer.Screen
        name='Profile'
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
}
