import React from 'react';
import {Account} from 'features/accounts';
import Transactions from 'components/Transactions';
import {AccountCard} from 'components/cards';

type MaterialTopTabProps = {
  key: string;
  name: string;
  params: Account;
};

type Props = {
  route: MaterialTopTabProps;
};

export default function AccountTab({route}: Props) {
  const {number} = route.params;
  return (
    <>
      <AccountCard number={number} />
      <Transactions number={number} />
    </>
  );
}
