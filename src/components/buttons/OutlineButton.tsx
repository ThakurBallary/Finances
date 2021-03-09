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
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 16,
  },
  text: {
    fontSize: sizes.default,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export function OutlineButton({onPress, style, text}: Props) {
  const {colors} = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {borderColor: colors.text}, style]}>
      <Text style={[styles.text, {color: colors.text}]}>{text}</Text>
    </Pressable>
  );
}
