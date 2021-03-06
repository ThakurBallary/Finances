import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {icons} from 'assets';
import {useTheme} from '@react-navigation/native';

type Props = {
  icon?: icons;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  icon: {
    fontSize: 20,
    opacity: 0.8,
  },
});

export function SectionHeaderIcon({icon}: Props) {
  const {colors} = useTheme();
  if (!icon) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Icon
        name={icon.toString()}
        style={[styles.icon, {color: colors.text}]}
      />
    </View>
  );
}
