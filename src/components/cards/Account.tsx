import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {accountSelector, setAccount} from 'features/accounts';
import {useAppDispatch, useAppSelector, useLanguage} from 'hooks';
import {AccountField, Balance, Row} from 'components/layouts';
import {TextButton} from 'components/buttons';
import {icons} from 'assets';
import {ToggleIcon} from 'components/icons';

type Props = {
  number: string;
};

export default function AccountTab({number}: Props) {
  const dispatch = useAppDispatch();
  const language = useLanguage();
  const account = useAppSelector((state) =>
    accountSelector.account(state, number),
  );
  let defaultBalance = account?.balance?.toString() || '';
  let defaultBank = account?.bank || '';
  let defaultBranch = account?.branch || '';
  let defaultName = account?.name || '';
  let defaultNumber = account?.number || '';

  const isEditMode = number === '';
  const [isReset, setIsReset] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showDetails, setShowDetails] = useState(isEditMode);
  const [stateBalance, setStateBalance] = useState(defaultBalance);
  const [stateBank, setStateBank] = useState(defaultBank);
  const [stateBranch, setStateBranch] = useState(defaultBranch);
  const [stateName, setStateName] = useState(defaultName);
  const [stateNumber, setStateNumber] = useState(defaultNumber);

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

  function reset() {
    setIsReset(true);
    setStateBalance(defaultBalance);
    setStateBank(defaultBank);
    setStateBranch(defaultBranch);
    setStateName(defaultName);
    setStateNumber(defaultNumber);
  }

  function onSave() {
    dispatch(
      setAccount({
        balance: JSON.parse(stateBalance),
        bank: stateBank,
        branch: stateBranch,
        isActive: true,
        name: stateName,
        number: stateNumber,
      }),
    );
    reset();
  }

  useEffect(() => {
    setIsValid(
      ![stateBalance, stateBank, stateBranch, stateName, stateNumber].includes(
        '',
      ),
    );
  }, [stateBalance, stateBank, stateBranch, stateName, stateNumber]);

  function toggleShowDetails() {
    setShowDetails((showDetailsPrev) => !showDetailsPrev);
  }

  return (
    <>
      <Balance
        defaultValue={stateBalance}
        isEditMode={isEditMode}
        isReset={isReset}
        onChangeText={onChangeBalance}
        placeholder={'0.00'}
        text={account?.balance.toString()}
      />
      {showDetails && (
        <View>
          <ScrollView keyboardShouldPersistTaps="always">
            <AccountField
              defaultValue={stateNumber}
              isEditMode={isEditMode}
              keyboardType="numeric"
              label={language.accountNumber}
              maxLength={20}
              onChangeText={onChangeNumber}
              placeholder={language.accountNumber}
              text={account?.number}
            />
            <AccountField
              defaultValue={stateName}
              isEditMode={isEditMode}
              label={language.accountHolder}
              maxLength={40}
              onChangeText={onChangeName}
              placeholder={language.accountHolder}
              text={account?.name}
            />
            <AccountField
              defaultValue={stateBank}
              isEditMode={isEditMode}
              label={language.bank}
              maxLength={40}
              onChangeText={onChangeBank}
              placeholder={language.bank}
              text={account?.bank}
            />
            <AccountField
              defaultValue={stateBranch}
              isEditMode={isEditMode}
              label={language.branch}
              maxLength={40}
              onChangeText={onChangeBranch}
              placeholder={language.branch}
              text={account?.branch}
            />
            {isEditMode && (
              <Row style={styles.buttonsContainer}>
                <TextButton
                  onPress={reset}
                  style={styles.cancelButton}
                  text={language.cancel}
                />
                <TextButton
                  isDisabled={!isValid}
                  onPress={onSave}
                  text={language.save}
                />
              </Row>
            )}
          </ScrollView>
        </View>
      )}
      <ToggleIcon
        onPress={toggleShowDetails}
        name={
          isEditMode
            ? undefined
            : showDetails
            ? icons.chevronUpCircleOutline
            : icons.chevronDownCircleOutline
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    paddingHorizontal: 16,
    justifyContent: 'space-evenly',
  },
  cancelButton: {
    opacity: 0.6,
  },
});
