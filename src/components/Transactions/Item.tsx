import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {setTransaction, Transaction} from 'features/transactions';
import {useAppDispatch, useLanguage} from 'hooks';
import {useTheme} from '@react-navigation/native';
import {setBalance} from 'features/accounts';
import {Row} from 'components/layouts';
import {TextButton} from 'components/buttons';
import {TransactionField} from './Field';
import {AmountField} from './AmountField';
import {sizes} from 'themes';

type Props = Transaction & {
  hideForm?: () => void;
};

export default function TransactionItem({
  accountNumber,
  amount,
  date,
  id,
  mode,
  title,
  hideForm,
}: Props) {
  const {colors} = useTheme();
  const language = useLanguage();
  const dispatch = useAppDispatch();
  let defaultAmount = amount === 0 ? '' : amount?.toString();
  let defaultDate = date || '';
  let defaultMode = mode || '';
  let defaultTitle = title || '';

  const isEditMode = !id;
  const [isValid, setIsValid] = useState(false);
  const [stateAmount, setStateAmount] = useState(defaultAmount);
  const [stateDate, setStateDate] = useState(defaultDate);
  const [stateMode, setStateMode] = useState(defaultMode);
  const [stateTitle, setStateTitle] = useState(defaultTitle);

  const reset = () => {
    setStateAmount(defaultAmount);
    setStateDate(defaultDate);
    setStateMode(defaultMode);
    setStateTitle(defaultTitle);
  };

  function onChangeAmount(updatedAmount: string) {
    setStateAmount(updatedAmount);
  }

  function onChangeDate(updatedDate: string) {
    setStateDate(updatedDate);
  }

  function onChangeMode(updatedMode: string) {
    setStateMode(updatedMode);
  }

  function onChangeTitle(updatedTitle: string) {
    setStateTitle(updatedTitle);
  }

  function prepareTransaction(): Transaction {
    return {
      accountNumber,
      amount: JSON.parse(stateAmount),
      date: stateDate,
      id: id || Date.now().toString(),
      mode: stateMode,
      isActive: true,
      title: stateTitle,
    };
  }

  function onCancel() {
    reset();
    if (hideForm) {
      hideForm();
    }
  }

  function onSave() {
    const updatedTransaction = prepareTransaction();
    dispatch(setTransaction(updatedTransaction));
    dispatch(
      setBalance({
        amount: updatedTransaction.amount - amount,
        number: updatedTransaction.accountNumber,
      }),
    );
    reset();
    if (hideForm) {
      hideForm();
    }
  }

  useEffect(() => {
    setIsValid(![stateTitle, stateAmount, stateDate].includes(''));
  }, [stateTitle, stateAmount, stateDate]);

  return (
    <Row style={styles.row}>
      <View style={styles.flex}>
        <View>
          <TransactionField
            isEditMode={isEditMode}
            text={title}
            defaultValue={stateTitle}
            maxLength={60}
            onChangeText={onChangeTitle}
            placeholder={language.title}
          />
        </View>
        <Row style={styles.padding}>
          <View style={styles.flex}>
            <TransactionField
              isEditMode={isEditMode}
              text={date}
              defaultValue={stateDate}
              maxLength={16}
              onChangeText={onChangeDate}
              placeholder={language.date}
              textStyle={styles.fontSmall}
              style={styles.fontSmall}
            />
          </View>
          <View style={styles.flex}>
            <TransactionField
              isEditMode={isEditMode}
              text={mode}
              defaultValue={stateMode}
              maxLength={20}
              onChangeText={onChangeMode}
              placeholder={language.mode}
              textStyle={styles.fontSmall}
              style={styles.fontSmall}
            />
          </View>
        </Row>
        {isEditMode && (
          <Row style={styles.row}>
            <TextButton
              onPress={onCancel}
              style={styles.buttonStyle}
              text={language.cancel}
              textStyle={styles.buttonText}
            />
            <TextButton
              isDisabled={!isValid}
              onPress={onSave}
              style={styles.buttonStyle}
              text={language.save}
            />
          </Row>
        )}
      </View>
      <View>
        <AmountField
          isEditMode={isEditMode}
          text={stateAmount}
          isReset={false}
          defaultValue={stateAmount}
          maxLength={12}
          onChangeText={onChangeAmount}
          placeholder={language.amount}
          placeholderTextColor={colors.text}
          mode={stateMode}
          style={styles.amount}
        />
      </View>
    </Row>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingLeft: 32,
    paddingRight: 16,
  },
  flex: {
    flex: 1,
  },
  padding: {
    paddingVertical: 4,
  },
  fontSmall: {
    fontSize: sizes.small,
  },
  buttonText: {
    opacity: 0.6,
  },
  buttonStyle: {
    paddingHorizontal: 32,
  },
  amount: {
    fontSize: sizes.sectionItem,
  },
});
