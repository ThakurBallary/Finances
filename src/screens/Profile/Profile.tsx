import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { styles } from 'themes';

export default function Profile() {
  const { colors } = useTheme();
  return (
    <View style={styles.flexCenter}>
      <Text style={{ color: colors.text }}>Profile Screen</Text>
    </View>
  );
}
