import React from 'react';
import { BeautifyThemeOverride } from '../types';
import { DEFAULT_THEME } from '../default-theme';
import { mergeTheme } from '../utils/merge-theme/merge-theme';
import { ThemeProvider } from './theme-context';

export interface BeautifyProviderProps {
  children: React.ReactNode;
  theme?: BeautifyThemeOverride;
}

export const BeautifyProvider = ({ children, theme }: BeautifyProviderProps) => {
  return <ThemeProvider value={mergeTheme({ ...DEFAULT_THEME }, theme)}>{children}</ThemeProvider>;
};

BeautifyProvider.displayName = '@beautify/Provider';
