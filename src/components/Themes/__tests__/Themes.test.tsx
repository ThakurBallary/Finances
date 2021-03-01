import * as React from 'react';
import {Appearance} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {fireEvent, render} from 'config/tests/test-utils';
import {store} from 'store/redux';
import Themes from '../Themes';

function renderComponent() {
  const systemTheme = Appearance.getColorScheme();
  const selectedTheme = store
    .getState()
    .themes.themes.find((theme) => theme.isSelected)?.name;
  let theme = DefaultTheme;
  if (
    selectedTheme === 'dark' ||
    (selectedTheme === 'system' && systemTheme === 'dark')
  ) {
    theme = DarkTheme;
  }
  const {getByText} = render(
    <NavigationContainer theme={theme}>
      <Themes />
    </NavigationContainer>,
  );
  return {getByText, selectedTheme};
}

describe('components/Themes', () => {
  test('initial state', () => {
    const {getByText, selectedTheme} = renderComponent();
    expect(selectedTheme).toBe('system');
    const themeText = getByText('theme');
    const darkText = getByText('dark');
    const lightText = getByText('light');
    const systemText = getByText('system');
    expect(themeText).toBeDefined();
    expect(darkText).toBeDefined();
    expect(lightText).toBeDefined();
    expect(systemText).toBeDefined();
    expect(themeText).toHaveStyle({color: 'rgb(28, 28, 30)'});
    expect(darkText).toHaveStyle({color: 'rgb(28, 28, 30)'});
    expect(lightText).toHaveStyle({color: 'rgb(28, 28, 30)'});
    expect(systemText).toHaveStyle({color: 'rgb(28, 28, 30)'});
  });

  test('Select other theme', () => {
    const beforePress = renderComponent();
    fireEvent.press(beforePress.getByText('dark'));
    const afterPress = renderComponent();
    expect(afterPress.selectedTheme).toBe('dark');
    expect(afterPress.getByText('theme')).toHaveStyle({
      color: 'rgb(229, 229, 231)',
    });
    expect(afterPress.getByText('dark')).toHaveStyle({
      color: 'rgb(229, 229, 231)',
    });
    expect(afterPress.getByText('light')).toHaveStyle({
      color: 'rgb(229, 229, 231)',
    });
    expect(afterPress.getByText('system')).toHaveStyle({
      color: 'rgb(229, 229, 231)',
    });
  });

  test('Select already selected theme', () => {
    const beforePress = renderComponent();
    fireEvent.press(beforePress.getByText('dark'));
    const afterPress = renderComponent();
    expect(afterPress.selectedTheme).toBe('dark');
    expect(afterPress.getByText('theme')).toHaveStyle({
      color: 'rgb(229, 229, 231)',
    });
    expect(afterPress.getByText('dark')).toHaveStyle({
      color: 'rgb(229, 229, 231)',
    });
    expect(afterPress.getByText('light')).toHaveStyle({
      color: 'rgb(229, 229, 231)',
    });
    expect(afterPress.getByText('system')).toHaveStyle({
      color: 'rgb(229, 229, 231)',
    });
  });
});
