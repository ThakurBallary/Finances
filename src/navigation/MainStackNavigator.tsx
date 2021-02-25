import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, ProfileScreen } from 'screens';

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
}
