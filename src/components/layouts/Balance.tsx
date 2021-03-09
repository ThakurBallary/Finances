import React from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';
import {RupeeIcon} from 'components/icons/RupeeIcon';
import {BalanceInput} from 'components/inputs';
import {BalanceText, Label} from 'components/texts';
import {Row} from './Row';
import {useLanguage} from 'hooks';
import {isAndroid} from 'utils';

type Props = {
  isEditMode?: boolean;
  isReset: boolean;
  text?: string;
} & TextInputProps;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  row: {
    alignItems: 'center',
    paddingVertical: 0,
  },
});

export function Balance({isEditMode, text, ...inputProps}: Props) {
  const language = useLanguage();
  let component = <BalanceInput {...inputProps} />;
  if (!isEditMode && text) {
    component = <BalanceText text={text} />;
  }
  const rowStyle = {marginTop: isAndroid() ? (isEditMode ? -14 : -4) : 0};
  return (
    <View style={styles.container}>
      <Label text={language.balance} />
      <Row style={[styles.row, rowStyle]}>
        <RupeeIcon />
        {component}
      </Row>
    </View>
  );
}
