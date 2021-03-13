import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleProp, TextInput, TextInputProps, TextStyle} from 'react-native';
import {sizes} from 'themes';

const localStyle: StyleProp<TextStyle> = {
  fontSize: sizes.sectionItem,
  paddingVertical: 0,
};

export function TransactionFieldInput(props: TextInputProps) {
  const {colors} = useTheme();

  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.border}
      selectionColor={colors.text}
      style={[{color: colors.text}, localStyle, props.style]}
      multiline={true}
      numberOfLines={2}
    />
  );
}
