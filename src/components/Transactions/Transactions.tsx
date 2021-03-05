import React from 'react';
import {useAppSelector} from 'hooks';
import {Transaction, transactionSelector} from 'features/transactions';
import {FlatList} from 'react-native-gesture-handler';
import Item from './Item';

type Props = {
  number: string;
};

export default function Transactions({number}: Props) {
  const allActiveTransactions = useAppSelector(
    transactionSelector.allActiveTransactions,
  );
  const transactions = useAppSelector((state) =>
    transactionSelector.transactions(state, number),
  );

  const keyExtractor = (item: Transaction) => item.id;

  function renderItem({item}: {item: Transaction}) {
    return <Item {...item} />;
  }

  return (
    <FlatList
      data={number === '0' ? allActiveTransactions : transactions}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}
