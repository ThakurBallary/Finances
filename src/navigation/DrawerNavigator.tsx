import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';

import { BottomTabNavigator } from 'navigation';
import { store } from 'store/redux';
import { setToken } from 'features/auth';

export type DrawerParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  function signOut() {
    store.dispatch(setToken(''));
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Sign Out" onPress={signOut} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
