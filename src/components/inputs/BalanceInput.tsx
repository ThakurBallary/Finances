import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleProp, TextInput, TextInputProps, TextStyle} from 'react-native';
import {sizes} from 'themes';
import {formatAmount} from 'utils';

const localStyle: StyleProp<TextStyle> = {
  fontSize: sizes.balance,
};

export function BalanceInput(props: TextInputProps) {
  const {colors} = useTheme();

  const [balance, setBalance] = useState(props.defaultValue);

  function handleInput(amount: string) {
    const formattedAmount = formatAmount(amount);
    if (formattedAmount !== 'false') {
      setBalance(formattedAmount);
      if (props.onChangeText) {
        props.onChangeText(formattedAmount.replace(/,/g, ''));
      }
    }
  }

  return (
    <TextInput
      {...props}
      keyboardType="numeric"
      maxLength={12}
      onChangeText={handleInput}
      placeholderTextColor={colors.border}
      selectionColor={colors.text}
      style={[{color: colors.text}, localStyle, props.style]}
      value={balance}
    />
  );
}
