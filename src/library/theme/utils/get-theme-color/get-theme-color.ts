import { ActonateTheme } from '@library/theme';

export function getThemeColor({
  theme,
  color,
  shade,
}: {
  theme: ActonateTheme;
  color: string | null;
  shade: number;
}) {
  const primaryShades = theme.colors[theme.primaryColor];
  if (!color) {
    return primaryShades[shade];
  }
  return color in theme.colors ? theme.colors[color][shade] : primaryShades[shade];
}
