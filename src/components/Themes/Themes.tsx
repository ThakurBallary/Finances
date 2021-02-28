import React from 'react';
import {Pressable, TextStyle} from 'react-native';
import {useAppDispatch, useAppSelector, useLanguage} from 'hooks';
import {themeSelector, setTheme, ThemeName, Theme} from 'features/themes';
import {SectionTitle, SectionItemTitle} from 'components/texts';
import {styles} from 'themes';

export default function Themes() {
  const language = useLanguage();
  const dispatch = useAppDispatch();
  const themes = useAppSelector(themeSelector.themes);
  const selectedTheme = useAppSelector(themeSelector.selectedTheme);

  function handlePress(theme: ThemeName) {
    if (selectedTheme !== theme) {
      dispatch(setTheme(theme));
    }
  }

  function renderItem(theme: Theme) {
    const style: TextStyle = {
      ...styles.sectionItemTitle,
      fontWeight: theme.isSelected ? 'bold' : 'normal',
    };
    return (
      <Pressable key={theme.name} onPress={() => handlePress(theme.name)}>
        <SectionItemTitle style={style}>
          {language[theme.name]}
        </SectionItemTitle>
      </Pressable>
    );
  }

  return (
    <>
      <SectionTitle style={styles.sectionTitle}>{language.theme}</SectionTitle>
      {themes.map(renderItem)}
    </>
  );
}
