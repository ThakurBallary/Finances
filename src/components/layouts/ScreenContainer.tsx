import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppStatusBar} from 'components';
import {useTheme} from '@react-navigation/native';
import {styles} from 'themes';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

export function ScreenContainer({children}: Props) {
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={[styles.screenContainer, {backgroundColor: colors.background}]}>
      <AppStatusBar />
      {children}
    </SafeAreaView>
  );
}
