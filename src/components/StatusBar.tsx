import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function AppStatusBar() {
  const {colors, dark} = useTheme();
  return (
    <StatusBar
      backgroundColor={colors.background}
      barStyle={dark ? 'light-content' : 'dark-content'}
    />
  );
}
