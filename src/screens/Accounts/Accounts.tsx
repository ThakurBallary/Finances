import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { styles } from 'themes';

export default function Accounts() {
  const { colors } = useTheme();
  return (
    <View style={styles.flexCenter}>
      <Text style={{ color: colors.text }}>Accounts Screen</Text>
    </View>
  );
}
