import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'themes';
import {isiOS} from 'utils';

type Props = {
  text: string;
  style?: TextStyle;
};

const localStyle: TextStyle = {
  fontSize: sizes.sectionItem,
  marginTop: isiOS() ? 2 : 0,
};

export function AccountFieldText({text, style}: Props) {
  const {colors} = useTheme();
  return <Text style={[{color: colors.text}, localStyle, style]}>{text}</Text>;
}
