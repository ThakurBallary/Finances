import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from 'navigation/BottomTabNavigator';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useAppSelector} from 'hooks';
import {themeSelector} from 'features/themes';

const Stack = createStackNavigator();

export default function AppNavigation() {
  const systemTheme = useColorScheme();
  const selectedTheme = useAppSelector(themeSelector.selectedTheme);
  let theme = DefaultTheme;
  if (
    selectedTheme === 'dark' ||
    (selectedTheme === 'system' && systemTheme === 'dark')
  ) {
    theme = DarkTheme;
  }

  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Main" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
}
