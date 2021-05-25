import { useTheme } from '../BeautifyProvider/theme-context';
import { BeautifyTheme, BeautifyThemeOverride } from '../types';
import { mergeTheme } from '../utils/merge-theme/merge-theme';

export function useBeautifyTheme(themeOverride?: BeautifyThemeOverride): BeautifyTheme {
  const internalTheme: any = useTheme();

  let mergedTheme = null;

  // if (!internalTheme.__beautify_theme) {
  //   mergedTheme = mergeTheme({ __beautify_theme: true, ...DEFAULT_THEME }, themeOverride);
  // } else {
  //   mergedTheme = mergeTheme(internalTheme, themeOverride);
  // }
  mergedTheme = mergeTheme(internalTheme, themeOverride);

  console.log(mergedTheme);

  delete mergedTheme.__beautify_theme;

  return mergedTheme;
}
