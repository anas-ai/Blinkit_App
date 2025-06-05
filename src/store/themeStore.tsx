import {Appearance} from 'react-native';
import {create} from 'zustand';
import {getStringFromStorage, saveToStorage} from '../utils/MmkvStorageHelper';

export type ThemeMode = 'light' | 'dark' | 'default';

type ThemeState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  resolvedTheme: 'light' | 'dark';
};

const getSystemTheme = (): 'light' | 'dark' =>
  Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

export const useThemeStore = create<ThemeState>((set, get) => {
  const savedMode = getStringFromStorage('themeMode') as ThemeMode | null;

  const mode: ThemeMode = savedMode ?? 'default';
  const resolved = mode === 'default' ? getSystemTheme() : mode;

  return {
    mode,
    setMode: (newMode: ThemeMode) => {
      saveToStorage('themeMode', newMode);
      const resolvedTheme = newMode === 'default' ? getSystemTheme() : newMode;
      set({mode: newMode, resolvedTheme});
    },
    resolvedTheme: resolved,
  };
});
