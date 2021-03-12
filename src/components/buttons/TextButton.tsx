import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'themes';

type Props = {
  isDisabled?: boolean;
  onPress: () => void;
  style?: object;
  text: string;
  textStyle?: object;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: sizes.default,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export function TextButton({
  isDisabled,
  onPress,
  style,
  text,
  textStyle,
}: Props) {
  const {colors} = useTheme();
  const opacity = isDisabled ? 0.6 : 1;
  return (
    <Pressable
      onPress={isDisabled ? null : onPress}
      style={[styles.container, {opacity}, style]}>
      <Text style={[styles.text, {color: colors.text}, textStyle]}>{text}</Text>
    </Pressable>
  );
}
