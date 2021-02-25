import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { AuthStackNavigator, DrawerNavigator } from 'navigation';
import { useAppSelector } from 'hooks';
import { authSelector } from 'features/auth';

const Stack = createStackNavigator();

export default function AppNavigation() {
  const systemTheme = useColorScheme();
  let theme = DefaultTheme;
  if (systemTheme === 'dark') {
    theme = DarkTheme;
  }

  const token = useAppSelector(authSelector.token);

  return (
    <AppearanceProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator headerMode="none">
          {token ? (
            <Stack.Screen name="Main" component={DrawerNavigator} />
          ) : (
              <Stack.Screen name="Auth" component={AuthStackNavigator} />
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
