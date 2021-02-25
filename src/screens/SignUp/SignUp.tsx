import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text } from 'react-native';

import { styles } from 'themes';

export default function SignUp() {
  const { colors } = useTheme();
  return (
    <View style={styles.flexCenter}>
      <Text style={{ color: colors.text }}>SignUp Screen</Text>
    </View>
  );
}
