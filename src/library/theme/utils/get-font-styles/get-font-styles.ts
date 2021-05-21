import { ActonateTheme } from '@library/theme';

export function getFontStyles(theme: ActonateTheme) {
  return {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: theme.fontFamily || 'sans-serif',
  };
}
