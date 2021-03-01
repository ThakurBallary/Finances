import * as React from 'react';
import {Provider} from 'react-redux';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import {store} from 'store/redux';
import Languages from '../Languages';

describe('components/Languages', () => {
  afterAll(cleanup);
  const component = (
    <Provider store={store}>
      <Languages />
    </Provider>
  );
  const {getByText} = render(component);

  test('initial state', () => {
    expect(getByText('language')).toBeDefined();
    expect(getByText('english')).toBeDefined();
    expect(getByText('hindi')).toBeDefined();
    const selectedLanguage = store
      .getState()
      .localisation.languages.find((language) => language.isSelected)?.name;
    expect(selectedLanguage).toBe('english');
  });

  test('Select other language', () => {
    fireEvent.press(getByText('hindi'));
    const selectedLanguage = store
      .getState()
      .localisation.languages.find((language) => language.isSelected)?.name;
    expect(selectedLanguage).toBe('hindi');
    expect(getByText('भाषा')).toBeDefined();
    expect(getByText('अंग्रेज़ी')).toBeDefined();
    expect(getByText('हिन्दी')).toBeDefined();
  });

  test('Select already selected language', () => {
    fireEvent.press(getByText('हिन्दी'));
    const selectedLanguage = store
      .getState()
      .localisation.languages.find((language) => language.isSelected)?.name;
    expect(selectedLanguage).toBe('hindi');
    expect(getByText('भाषा')).toBeDefined();
    expect(getByText('अंग्रेज़ी')).toBeDefined();
    expect(getByText('हिन्दी')).toBeDefined();
  });
});
