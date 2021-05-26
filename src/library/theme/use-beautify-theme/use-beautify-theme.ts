import { useTheme } from '../BeautifyProvider/theme-context';
import { BeautifyTheme, BeautifyThemeOverride } from '../types';
import { mergeTheme } from '../utils/merge-theme/merge-theme';

export function useBeautifyTheme(themeOverride?: BeautifyThemeOverride): BeautifyTheme {
  const internalTheme = useTheme();

  let mergedTheme = null;

  mergedTheme = mergeTheme(internalTheme, themeOverride);

  return mergedTheme;
}
