import {AppState} from 'store/redux';
import {LanguageName} from './slice';

const languages = (state: AppState) => state.localisation.languages;

const selectedLanguage = (state: AppState): LanguageName =>
  state.localisation.languages.find((e) => e.isSelected)?.name || 'english';

export default {
  languages,
  selectedLanguage,
};
