import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleProp, TextInput, TextInputProps, TextStyle} from 'react-native';
import {sizes} from 'themes';

const localStyle: StyleProp<TextStyle> = {
  fontSize: sizes.balance,
};

export function BalanceInput(props: TextInputProps) {
  const {colors} = useTheme();
  return (
    <TextInput
      {...props}
      keyboardType="numeric"
      maxLength={10}
      placeholderTextColor={colors.border}
      selectionColor={colors.text}
      style={[{color: colors.text}, localStyle, props.style]}
    />
  );
}
