import { useTheme } from '../BeautifyProvider/theme-context';
// import { InternalBeautifyTheme, BeautifyThemeOverride, BeautifyTheme } from '../types';
import { mergeTheme } from '../utils/merge-theme/merge-theme';
import { DEFAULT_THEME } from '../default-theme';

export function useBeautifyTheme(themeOverride?: any): any {
  const internalTheme: any = useTheme();

  let mergedTheme = null;

  if (!internalTheme._beautify_theme) {
    mergedTheme = mergeTheme({ _beautify_theme: true, ...DEFAULT_THEME }, themeOverride);
  } else {
    mergedTheme = mergeTheme(internalTheme, themeOverride);
  }

  delete mergedTheme._beautify_theme;

  return mergedTheme;
}
