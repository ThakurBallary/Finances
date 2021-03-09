import React from 'react';
import {Account} from 'features/accounts';
import Transactions from 'components/Transactions';
import {AccountCard} from 'components/cards';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {styles} from 'themes';

type MaterialTopTabProps = {
  key: string;
  name: string;
  params: Account;
};

type Props = {
  route: MaterialTopTabProps;
};

export default function AccountTab({route}: Props) {
  const {colors} = useTheme();
  const {number} = route.params;
  return (
    <View
      style={[styles.screenContainer, {backgroundColor: colors.background}]}>
      <AccountCard number={number} />
      {/* <Transactions number={number} /> */}
    </View>
  );
}
