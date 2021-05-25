import { weights, lineHeights, headings, colors, shadows, paddings, radii, sizes } from './configs';
import { BeautifyTheme } from './types';

export const DEFAULT_THEME: BeautifyTheme = {
  colorScheme: 'light',
  primaryColor: 'blue',
  white: '#fff',
  black: '#000',
  transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21)',
  colors,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace: 'Menlo, Monaco, Lucida Console, monospace',
  weights,
  lineHeights,
  shadows,
  fontSizes: sizes,
  radius: radii,
  paddings,
  headings,
};
