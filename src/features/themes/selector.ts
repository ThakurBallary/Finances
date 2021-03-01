import {AppState} from 'store/redux';

const selectedTheme = (state: AppState) =>
  state.themes.themes.find((theme) => theme.isSelected)?.name;

const themes = (state: AppState) => state.themes.themes;

export default {
  selectedTheme,
  themes,
};
