import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getTextSizeValue,
  getThemeColor,
  useBeautifyTheme,
} from '@library/theme';
import { useMemo } from 'react';

export type GroupPosition = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

interface LoaderStylesProps extends DefaultStyleProps {
  color?: string;
  size: BeautifySize;
}
interface StylesProps extends LoaderStylesProps {
  theme: BeautifyTheme;
}
export const LOADER_SIZES = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58,
};
const getStyles = (props: StylesProps) => {
  const { theme, color, size } = props;
  const classes = {
    LoaderWidth: `${getTextSizeValue({ size, sizes: LOADER_SIZES })}px`,
    LoaderFill: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
  };
  const css = {};
  return { classes, css };
};

export const useStyles = (props: LoaderStylesProps) => {
  const { themeOverride, color, size } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, color, size }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, color, size]
  );
};
