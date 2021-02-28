import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type LanguageName = 'english' | 'hindi';

export type Language = {
  isSelected: boolean;
  name: LanguageName;
};

export type LocalisationState = {
  languages: Language[];
};

export const initialState: LocalisationState = {
  languages: [
    {
      isSelected: true,
      name: 'english',
    },
    {
      isSelected: false,
      name: 'hindi',
    },
  ],
};

const localisationSlice = createSlice({
  name: 'localisation',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<LanguageName>) {
      const languages = state.languages.map((language) => {
        language.isSelected = language.name === action.payload;
        return language;
      });
      state.languages = languages;
    },
  },
});

export const {setLanguage} = localisationSlice.actions;
export const localisation = localisationSlice.reducer;
