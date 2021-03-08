import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'themes';

type Props = {
  text: string;
  style?: TextStyle;
};

const localStyle: TextStyle = {
  fontSize: sizes.screenTitle,
  textTransform: 'capitalize',
  fontWeight: 'bold',
};

export function ScreenHeaderText({text, style}: Props) {
  const {colors} = useTheme();

  return <Text style={[{color: colors.text}, localStyle, style]}>{text}</Text>;
}
