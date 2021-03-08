import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'themes';

type Props = {
  isSelected?: boolean;
  text: string;
  style?: TextStyle;
};

const localStyle: TextStyle = {
  fontSize: sizes.sectionItem,
  textTransform: 'capitalize',
};

export function SectionItemText({isSelected, style, text}: Props) {
  const {colors} = useTheme();
  style = {
    ...style,
    fontWeight: isSelected ? 'bold' : 'normal',
    opacity: isSelected ? 1 : 0.8,
  };

  return <Text style={[{color: colors.text}, localStyle, style]}>{text}</Text>;
}
