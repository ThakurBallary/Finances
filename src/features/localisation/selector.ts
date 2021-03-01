import {AppState} from 'store/redux';

const languages = (state: AppState) => state.localisation.languages;

const selectedLanguage = (state: AppState) =>
  state.localisation.languages.find((e) => e.isSelected)?.name;

export default {
  languages,
  selectedLanguage,
};
