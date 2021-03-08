import React from 'react';
import Languages from 'components/Languages';
import Themes from 'components/Themes';
import {ScreenContainer, ScreenHeader} from 'components/layouts';
import {useLanguage} from 'hooks';

export default function Settings() {
  const language = useLanguage();

  return (
    <ScreenContainer>
      <ScreenHeader text={language.settings} />
      <Languages />
      <Themes />
    </ScreenContainer>
  );
}
