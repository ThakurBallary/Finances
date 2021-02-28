import {useMemo} from 'react';
import {languageSelector} from 'features/localisation';
import {useAppSelector} from './redux';
import {English, Hindi} from 'dictionary';

export function useLanguage() {
  const selectedLanguage = useAppSelector(languageSelector.selectedLanguage);
  return useMemo(() => (selectedLanguage === 'hindi' ? Hindi : English), [
    selectedLanguage,
  ]);
}
