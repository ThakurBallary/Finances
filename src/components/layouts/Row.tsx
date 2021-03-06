import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  style?: object;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
});

export function Row({children, style}: Props) {
  return <View style={[styles.row, style]}>{children}</View>;
}
