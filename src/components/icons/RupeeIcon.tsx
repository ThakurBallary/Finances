import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {icons} from 'assets';
import {useTheme} from '@react-navigation/native';
import {isiOS} from 'utils';

type Props = {
  style?: object;
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 28,
    paddingRight: 4,
    paddingTop: isiOS() ? 0 : 6,
    opacity: 0.8,
  },
});

export function RupeeIcon({style}: Props) {
  const {colors} = useTheme();

  return (
    <Icon
      name={icons.rupee.toString()}
      style={[styles.icon, {color: colors.text}, style]}
    />
  );
}
