import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {icons} from 'assets';
import {useTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    paddingRight: 4,
    paddingTop: 6,
    opacity: 0.8,
  },
});

export function RupeeIcon() {
  const {colors} = useTheme();

  return (
    <Icon
      name={icons.rupee.toString()}
      style={[styles.icon, {color: colors.text}]}
    />
  );
}
