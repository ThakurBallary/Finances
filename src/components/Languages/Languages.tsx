import React from 'react';
import { Pressable, TextStyle } from 'react-native';
import { useAppDispatch, useAppSelector, useLanguage } from 'hooks';
import {
  Language,
  LanguageName,
  languageSelector,
  setLanguage,
} from 'features/localisation';
import { SectionTitle, SectionItemTitle } from 'components/texts';
import { styles } from 'themes';

const localStyle = {
  placeholderText: {
    opacity: 0.5,
  },
};

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
    const sectionItemTitle: TextStyle = {
      ...styles.sectionItemTitle,
      fontWeight: language.isSelected ? 'bold' : 'normal',
    };
    return (
      <Pressable key={language.name} onPress={() => handlePress(language.name)}>
        <SectionItemTitle style={sectionItemTitle}>
          {t[language.name]}
        </SectionItemTitle>
        {selectedLanguage !== 'english' && language.name === 'english' && (
          <SectionItemTitle style={localStyle.placeholderText}>
            English
          </SectionItemTitle>
        )}
      </Pressable>
    );
  }

  return (
    <>
      <SectionTitle style={styles.sectionTitle}>{t.language}</SectionTitle>
      {languages.map(renderItem)}
    </>
  );
}
