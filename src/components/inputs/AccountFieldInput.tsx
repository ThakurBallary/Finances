import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleProp, TextInput, TextInputProps, TextStyle} from 'react-native';
import {sizes} from 'themes';
import {isiOS} from 'utils';

const localStyle: StyleProp<TextStyle> = {
  fontSize: sizes.sectionItem,
  marginLeft: isiOS() ? 0 : -4,
  marginTop: isiOS() ? 4 : -12,
};

export function AccountFieldInput(props: TextInputProps) {
  const {colors} = useTheme();

  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.border}
      selectionColor={colors.text}
      style={[{color: colors.text}, localStyle, props.style]}
    />
  );
}
