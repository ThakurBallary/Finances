import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StatusBar from 'components/StatusBar';
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
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}
