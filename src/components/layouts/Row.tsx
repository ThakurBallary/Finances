import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: React.ReactElement[];
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default function Row({children}: Props) {
  return <View style={styles.row}>{children}</View>;
}
