import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {sizes} from 'themes';

type Props = {
  isDisabled: boolean;
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

export function PrimaryButton({isDisabled, onPress, style, text}: Props) {
  const {colors} = useTheme();
  const opacity = isDisabled ? 0.6 : 1;
  return (
    <Pressable
      onPress={isDisabled ? null : onPress}
      style={[
        styles.container,
        {
          backgroundColor: colors.text,
          borderColor: colors.text,
          opacity,
        },
        style,
      ]}>
      <Text style={[styles.text, {color: colors.card}]}>{text}</Text>
    </Pressable>
  );
}
