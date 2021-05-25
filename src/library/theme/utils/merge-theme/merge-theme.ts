// import { InternalMantineTheme, MantineThemeOverride } from '../../types';

import { BeautifyThemeOverride, InternalBeautifyTheme } from '@library/theme/types';

export function mergeTheme(
  currentTheme: InternalBeautifyTheme,
  themeOverride?: BeautifyThemeOverride
): InternalBeautifyTheme {
  if (!themeOverride) {
    return currentTheme;
  }

  const colors = { ...currentTheme.colors, ...themeOverride.colors };

  const theme = { ...currentTheme, ...themeOverride, ...colors };

  return theme;
}
