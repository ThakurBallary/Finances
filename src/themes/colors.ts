import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const colors = {
  black: '#000',
  blue: '#18f',
  darkGray: '#888',
  gray: '#eee',
  green: '#4c1',
  secondaryBlack: '#444',
  secondaryGray: '#fafafa',
  red: '#e41',
  white: '#fff',
  yellow: '#fc1',
};

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    notification: colors.red,
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    notification: colors.red,
  },
};
