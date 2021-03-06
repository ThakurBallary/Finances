import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Languages from 'components/Languages';
import Themes from 'components/Themes';
import StatusBar from 'components/StatusBar';
import {ScreenHeader} from 'components/layouts';
import {useLanguage} from 'hooks';
import {useTheme} from '@react-navigation/native';
import {styles} from 'themes';

export default function Settings() {
  const {colors} = useTheme();
  const language = useLanguage();

  return (
    <SafeAreaView
      style={[styles.screenContainer, {backgroundColor: colors.card}]}>
      <StatusBar />
      <ScreenHeader text={language.settings} />
      <Languages />
      <Themes />
    </SafeAreaView>
  );
}
