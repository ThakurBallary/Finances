import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'themes';

type Props = {
  text: React.ReactNode;
  style?: TextStyle;
};

const localStyle: TextStyle = {
  fontSize: sizes.balance,
};

export function BalanceText({text, style}: Props) {
  const {colors} = useTheme();

  return <Text style={[{color: colors.text}, localStyle, style]}>{text}</Text>;
}
