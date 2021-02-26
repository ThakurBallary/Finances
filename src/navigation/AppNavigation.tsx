import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { BottomTabNavigator } from 'navigation';

const Stack = createStackNavigator();

export default function AppNavigation() {
  const systemTheme = useColorScheme();
  let theme = DefaultTheme;
  if (systemTheme === 'dark') {
    theme = DarkTheme;
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
