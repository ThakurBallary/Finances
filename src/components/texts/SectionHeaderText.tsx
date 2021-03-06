import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

type Props = {
  text: string;
  style?: TextStyle;
};

const localStyle: TextStyle = {
  fontSize: 16,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  opacity: 0.4,
};

export function SectionHeaderText({text, style}: Props) {
  const {colors} = useTheme();

  return <Text style={[{color: colors.text}, localStyle, style]}>{text}</Text>;
}
