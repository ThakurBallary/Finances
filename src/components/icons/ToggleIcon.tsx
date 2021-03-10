import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {icons} from 'assets';
import {useTheme} from '@react-navigation/native';

type Props = {
  name?: icons;
  onPress: () => void;
  style?: object;
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    opacity: 0.8,
    alignSelf: 'center',
  },
});

export function ToggleIcon({name, onPress, style}: Props) {
  const {colors} = useTheme();
  if (!name) {
    return null;
  }

  return (
    <Icon
      onPress={onPress}
      name={name.toString()}
      style={[styles.icon, {color: colors.text}, style]}
    />
  );
}
