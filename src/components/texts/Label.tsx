import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'themes';

type Props = {
  text: string;
  style?: TextStyle;
};

const localStyle: TextStyle = {
  fontSize: sizes.label,
  textTransform: 'capitalize',
  fontWeight: 'bold',
  opacity: 0.4,
};

export function Label({text, style}: Props) {
  const {colors} = useTheme();

  return <Text style={[{color: colors.text}, localStyle, style]}>{text}</Text>;
}
