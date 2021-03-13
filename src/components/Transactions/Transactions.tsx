import React from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from 'hooks';
import {Transaction, transactionSelector} from 'features/transactions';
import Item from './Item';
import AddTransaction from './Add';

type Props = {
  number: string;
};

export default function Transactions({number}: Props) {
  const transactions = useAppSelector((state) =>
    transactionSelector.transactions(state, number),
  );

  if (!number) {
    return null;
  }

  const keyExtractor = (item: Transaction) => item.id;

  function renderItem({item}: {item: Transaction}) {
    return <Item {...item} />;
  }

  return (
    <>
      <AddTransaction accountNumber={number} />
      <FlatList
        data={transactions}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        keyboardShouldPersistTaps="handled"
      />
    </>
  );
}
