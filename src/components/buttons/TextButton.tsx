import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'themes';

type Props = {
  onPress: () => void;
  style?: object;
  text: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    margin: 16,
  },
  text: {
    fontSize: sizes.default,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export function TextButton({onPress, style, text}: Props) {
  const {colors} = useTheme();
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.text, {color: colors.text}]}>{text}</Text>
    </Pressable>
  );
}
