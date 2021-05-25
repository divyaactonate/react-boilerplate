import { createContext, useContext } from 'react';

const ThemeContext = createContext({});

const useTheme = () => {
  return useContext(ThemeContext);
};
const ThemeProvider = ThemeContext.Provider;
export { ThemeProvider, useTheme };
