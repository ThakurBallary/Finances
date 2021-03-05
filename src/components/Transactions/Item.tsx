import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
import {setTransaction, Transaction} from 'features/transactions';
import {useAppDispatch, useLanguage} from 'hooks';
import {useTheme} from '@react-navigation/native';
import {setBalance} from 'features/accounts';

export default function TransactionItem({
  accountNumber,
  amount,
  date,
  id,
  mode,
  title,
}: Transaction) {
  const {colors} = useTheme();
  const language = useLanguage();
  const dispatch = useAppDispatch();
  let defaultAmount = amount === 0 ? '' : amount?.toString();
  let defaultDate = date || '';
  let defaultMode = mode || '';
  let defaultTitle = title || '';

  const [isEditMode, setIsEditMode] = useState(!id);
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

  function turnOnEditMode() {
    setIsEditMode(true);
  }

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

  function onDelete() {
    const updatedTransaction = prepareTransaction();
    updatedTransaction.isActive = false;
    dispatch(setTransaction(updatedTransaction));
    dispatch(
      setBalance({
        amount: -1 * amount,
        number: accountNumber,
      }),
    );
  }

  function onCancel() {
    reset();
    if (id) {
      setIsEditMode(false);
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
    if (id) {
      setIsEditMode(false);
    } else {
      reset();
    }
  }

  if (isEditMode) {
    return (
      <>
        <TextInput
          defaultValue={stateDate}
          maxLength={19}
          onChangeText={onChangeDate}
          placeholder={language.date}
          placeholderTextColor={colors.text}
          style={{color: colors.text}}
        />
        <TextInput
          defaultValue={stateTitle}
          maxLength={40}
          onChangeText={onChangeTitle}
          placeholder={language.title}
          placeholderTextColor={colors.text}
          style={{color: colors.text}}
        />
        <TextInput
          defaultValue={stateMode}
          maxLength={20}
          onChangeText={onChangeMode}
          placeholder={language.mode}
          placeholderTextColor={colors.text}
          style={{color: colors.text}}
        />
        <TextInput
          defaultValue={stateAmount}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={onChangeAmount}
          placeholder={language.amount}
          placeholderTextColor={colors.text}
          style={{color: colors.text}}
        />
        <>
          {!!id && (
            <Text style={{color: colors.text}} onPress={onDelete}>
              {language.delete}
            </Text>
          )}
          <Text style={{color: colors.text}} onPress={onCancel}>
            {language.cancel}
          </Text>
          <Text style={{color: colors.text}} onPress={onSave}>
            {language.save}
          </Text>
        </>
      </>
    );
  }

  return (
    <>
      <Text style={{color: colors.text}} onPress={turnOnEditMode}>
        {date}
      </Text>
      <Text style={{color: colors.text}} onPress={turnOnEditMode}>
        {title}
      </Text>
      <Text style={{color: colors.text}} onPress={turnOnEditMode}>
        {mode}
      </Text>
      <Text style={{color: colors.text}} onPress={turnOnEditMode}>
        {amount}
      </Text>
    </>
  );
}
