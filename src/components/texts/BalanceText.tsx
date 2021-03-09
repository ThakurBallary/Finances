import React from 'react';
import {Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'themes';
import {formatAmount} from 'utils';

type Props = {
  text: string;
  style?: TextStyle;
};

const localStyle: TextStyle = {
  fontSize: sizes.balance,
};

export function BalanceText({text, style}: Props) {
  const {colors} = useTheme();
  return (
    <Text style={[{color: colors.text}, localStyle, style]}>
      {formatAmount(text)}
    </Text>
  );
}
