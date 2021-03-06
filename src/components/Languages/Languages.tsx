import React from 'react';
import {Pressable} from 'react-native';
import {useAppDispatch, useAppSelector, useLanguage} from 'hooks';
import {
  Language,
  LanguageName,
  languageSelector,
  setLanguage,
} from 'features/localisation';
import {SectionHeader} from 'components/layouts';
import {icons} from 'assets';
import {ListItem} from 'components/layouts';

export default function Languages() {
  const t = useLanguage();
  const dispatch = useAppDispatch();
  const languages = useAppSelector(languageSelector.languages);
  const selectedLanguage = useAppSelector(languageSelector.selectedLanguage);

  function handlePress(language: LanguageName) {
    if (selectedLanguage !== language) {
      dispatch(setLanguage(language));
    }
  }

  function renderItem(language: Language) {
    return (
      <Pressable key={language.name} onPress={() => handlePress(language.name)}>
        <ListItem isSelected={language.isSelected} text={t[language.name]} />
      </Pressable>
    );
  }

  return (
    <>
      <SectionHeader icon={icons.language} text={t.language} />
      {languages.map(renderItem)}
    </>
  );
}
