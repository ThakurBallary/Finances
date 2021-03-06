import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenHeaderText} from 'components/texts';

type Props = {
  text: string;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
});

export function ScreenHeader({text}: Props) {
  return (
    <View style={styles.container}>
      <ScreenHeaderText text={text} />
    </View>
  );
}
