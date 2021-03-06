import React from 'react';
import {Pressable, TextStyle} from 'react-native';
import {useAppDispatch, useAppSelector, useLanguage} from 'hooks';
import {themeSelector, setTheme, ThemeName, Theme} from 'features/themes';
import {SectionHeader} from 'components/layouts';
import {icons} from 'assets';
import {ListItem} from 'components/layouts';

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
      fontWeight: theme.isSelected ? 'bold' : 'normal',
    };
    return (
      <Pressable key={theme.name} onPress={() => handlePress(theme.name)}>
        <ListItem
          isSelected={theme.isSelected}
          style={style}
          text={language[theme.name]}
        />
      </Pressable>
    );
  }

  return (
    <>
      <SectionHeader icon={icons.colorWand} text={language.theme} />
      {themes.map(renderItem)}
    </>
  );
}
