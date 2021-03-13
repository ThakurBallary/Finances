import React from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';
import {TransactionFieldInput} from 'components/inputs';
import {AccountFieldText} from 'components/texts';
import {isAndroid} from 'utils';

type Props = {
  isEditMode?: boolean;
  label?: string;
  text?: string;
  textStyle?: object;
} & TextInputProps;

const styles = StyleSheet.create({
  container: {
    marginLeft: isAndroid() ? -4 : 0,
  },
});

export function TransactionField({
  isEditMode,
  text,
  textStyle,
  ...inputProps
}: Props) {
  let component = <TransactionFieldInput {...inputProps} />;
  if (!isEditMode) {
    component = <AccountFieldText style={textStyle} text={text || ''} />;
  }
  return <View style={styles.container}>{component}</View>;
}
