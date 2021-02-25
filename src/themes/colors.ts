const colors = {
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

const defaultTheme = {
  primary: colors.black,
  secondary: colors.secondaryBlack,
  primaryBackground: colors.white,
  secondaryBackground: colors.secondaryGray,
};

const darkTheme = {
  primary: colors.white,
  secondary: colors.gray,
  primaryBackground: colors.black,
  secondaryBackground: colors.secondaryBlack,
};

export default {
  ...colors,
  defaultTheme,
  darkTheme,
};
