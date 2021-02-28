import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

type Props = {
  children: string;
  style?: TextStyle;
};

const localStyle: TextStyle = {
  fontSize: 14,
};

export function SectionItemTitle({children, style}: Props) {
  const {colors} = useTheme();

  return (
    <Text style={[{color: colors.text}, localStyle, style]}>{children}</Text>
  );
}
