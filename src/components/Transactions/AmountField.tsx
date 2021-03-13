import React from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';
import {BalanceInput} from 'components/inputs';
import {BalanceText} from 'components/texts';
import {colors, sizes} from 'themes';

type Props = {
  isEditMode?: boolean;
  isReset: boolean;
  mode: string;
  text?: string;
} & TextInputProps;

const styles = StyleSheet.create({
  container: {
    width: 100,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: sizes.sectionItem,
  },
});

export function AmountField({isEditMode, mode, text, ...inputProps}: Props) {
  let component = <BalanceInput {...inputProps} />;
  const textStyle = {
    ...styles.text,
    color: mode ? colors.red : colors.green,
  };
  if (!isEditMode && text) {
    component = <BalanceText text={text} style={textStyle} />;
  }
  return <View style={styles.container}>{component}</View>;
}
