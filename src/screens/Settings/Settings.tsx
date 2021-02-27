import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Languages from 'components/Languages';
import Themes from 'components/Themes';
import StatusBar from 'components/StatusBar';

export default function Settings() {
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <StatusBar />
      <Text style={{ color: colors.text }}>Settings Screen</Text>
      <Languages />
      <Themes />
    </SafeAreaView>
  );
}
