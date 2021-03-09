import React from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';
import {AccountFieldInput} from 'components/inputs';
import {AccountFieldText, Label} from 'components/texts';

type Props = {
  isEditMode?: boolean;
  label: string;
  text?: string;
} & TextInputProps;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
});

export function AccountField({isEditMode, label, text, ...inputProps}: Props) {
  let component = <AccountFieldInput {...inputProps} />;
  if (!isEditMode && text) {
    component = <AccountFieldText text={text} />;
  }
  return (
    <View style={styles.container}>
      <Label text={label} />
      {component}
    </View>
  );
}
