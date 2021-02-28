import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ThemeName = 'dark' | 'light' | 'system';

export type Theme = {
  isSelected: boolean;
  name: ThemeName;
};

export type ThemesState = {
  themes: Theme[];
};

export const initialState: ThemesState = {
  themes: [
    {
      isSelected: false,
      name: 'dark',
    },
    {
      isSelected: false,
      name: 'light',
    },
    {
      isSelected: true,
      name: 'system',
    },
  ],
};

const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      const themes = state.themes.map((theme) => {
        theme.isSelected = false;
        if (theme.name === action.payload) {
          theme.isSelected = true;
        }
        return theme;
      });
      state.themes = themes;
    },
  },
});

export const {setTheme} = themesSlice.actions;
export const themes = themesSlice.reducer;
