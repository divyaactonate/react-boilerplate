import { createContext, useContext } from 'react';
import { DEFAULT_THEME } from '../default-theme';

const ThemeContext = createContext(DEFAULT_THEME);

const useTheme = () => {
  return useContext(ThemeContext);
};
const ThemeProvider = ThemeContext.Provider;
export { ThemeProvider, useTheme };
