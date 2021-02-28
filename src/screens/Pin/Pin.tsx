import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {styles} from 'themes';

export default function Pin() {
  const {colors} = useTheme();

  return (
    <View style={styles.flexCenter}>
      <Text style={{color: colors.text}}>Pin In</Text>
    </View>
  );
}
