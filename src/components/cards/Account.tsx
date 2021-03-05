import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Account, accountSelector, setAccount} from 'features/accounts';
import {useAppDispatch, useAppSelector, useLanguage} from 'hooks';

type Props = {
  number: string;
};

export default function AccountTab({number}: Props) {
  const {colors} = useTheme();
  const language = useLanguage();
  const dispatch = useAppDispatch();
  const account = useAppSelector((state) =>
    accountSelector.account(state, number),
  );
  const accounts = useAppSelector(accountSelector.accounts);
  let defaultBalance = account?.balance?.toString() || '';
  let defaultBank = account?.bank || '';
  let defaultBranch = account?.branch || '';
  let defaultName = account?.name || '';
  let defaultNumber = account?.number || '';
  if (number === '0') {
    let totalBalance = 0;
    for (const eachAccount of accounts) {
      totalBalance += eachAccount.balance;
    }
    defaultBalance = totalBalance.toString();
  }

  const [isEditMode, setIsEditMode] = useState(number === '');
  const [stateBalance, setStateBalance] = useState(defaultBalance);
  const [stateBank, setStateBank] = useState(defaultBank);
  const [stateBranch, setStateBranch] = useState(defaultBranch);
  const [stateName, setStateName] = useState(defaultName);
  const [stateNumber, setStateNumber] = useState(defaultNumber);

  const reset = () => {
    setStateBalance(defaultBalance);
    setStateBank(defaultBank);
    setStateBranch(defaultBranch);
    setStateName(defaultName);
    setStateNumber(defaultNumber);
  };

  function turnOnEditMode() {
    setIsEditMode(true);
  }

  function onChangeBalance(balance: string) {
    setStateBalance(balance);
  }

  function onChangeBank(bank: string) {
    setStateBank(bank);
  }

  function onChangeBranch(branch: string) {
    setStateBranch(branch);
  }

  function onChangeName(name: string) {
    setStateName(name);
  }

  function onChangeNumber(accountNumber: string) {
    setStateNumber(accountNumber);
  }

  function prepareAccount(): Account {
    return {
      balance: JSON.parse(stateBalance),
      bank: stateBank,
      branch: stateBranch,
      isActive: true,
      name: stateName,
      number: stateNumber,
    };
  }

  function onDelete() {
    const updatedAccount = prepareAccount();
    updatedAccount.isActive = false;
    dispatch(setAccount(updatedAccount));
  }

  function onCancel() {
    reset();
    if (number) {
      setIsEditMode(false);
    }
  }

  function onSave() {
    const updatedAccount = prepareAccount();
    dispatch(setAccount(updatedAccount));
    if (number) {
      setIsEditMode(false);
    } else {
      reset();
    }
  }

  if (number === '0') {
    return <Text style={{color: colors.text}}>{stateBalance}</Text>;
  }

  if (isEditMode) {
    return (
      <>
        <TextInput
          defaultValue={stateBalance}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={onChangeBalance}
          placeholder={language.balance}
          placeholderTextColor={colors.text}
          style={{color: colors.text}}
        />
        <TextInput
          defaultValue={stateBank}
          maxLength={40}
          onChangeText={onChangeBank}
          placeholder={language.bankName}
          placeholderTextColor={colors.text}
          style={{color: colors.text}}
        />
        <TextInput
          defaultValue={stateBranch}
          maxLength={40}
          onChangeText={onChangeBranch}
          placeholder={language.branch}
          placeholderTextColor={colors.text}
          style={{color: colors.text}}
        />
        <TextInput
          defaultValue={stateName}
          maxLength={40}
          onChangeText={onChangeName}
          placeholder={language.accountHolderName}
          placeholderTextColor={colors.text}
          style={{color: colors.text}}
        />
        {number ? (
          <Text style={{color: colors.text}}>{number}</Text>
        ) : (
          <TextInput
            defaultValue={stateNumber}
            maxLength={40}
            onChangeText={onChangeNumber}
            placeholder={language.accountNumber}
            placeholderTextColor={colors.text}
            style={{color: colors.text}}
          />
        )}
        <>
          {!!number && (
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
        {stateBalance}
      </Text>
      <Text style={{color: colors.text}} onPress={turnOnEditMode}>
        {stateBank}
      </Text>
      <Text style={{color: colors.text}} onPress={turnOnEditMode}>
        {stateBranch}
      </Text>
      <Text style={{color: colors.text}} onPress={turnOnEditMode}>
        {stateName}
      </Text>
      <Text style={{color: colors.text}}>{number}</Text>
    </>
  );
}
