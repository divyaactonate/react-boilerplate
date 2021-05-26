import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getRadiusValue,
  getThemeColor,
  hexToRgba,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface ThemeIconStylesProps extends DefaultStyleProps {
  color?: string;
  size: BeautifySize;
  radius: BeautifySize;
}
interface StylesProps extends ThemeIconStylesProps {
  theme: BeautifyTheme;
}
export const sizes = {
  xs: 'w-8 h-8',
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
  xl: 'w-24 h-24',
};
const getStyles = (props: StylesProps) => {
  const { theme, radius, color, size } = props;
  // const iconSize = getSizeValue({ size, sizes });
  const classes = {
    themeIcon: cx(
      `inline-flex items-center p-2 justify-center box-border`,
      sizes[size],
      getRadiusValue({ radius })
    ),
  };
  const css = {
    light: {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 1 }),
        theme.colorScheme === 'dark' ? 0.3 : 1
      ),
    },
    filled: {
      color: theme.colorScheme === 'dark' ? getThemeColor({ theme, color, shade: 0 }) : theme.white,
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: 7 }),
        theme.colorScheme === 'dark' ? 0.65 : 1
      ),
    },
    // themeIcon: {
    //   width: iconSize,
    //   height: iconSize,
    // },
  };
  return { classes, css };
};

export const useStyles = (props: ThemeIconStylesProps) => {
  const { themeOverride, radius, color, size } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, radius, color, size }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, radius, color, size]
  );
};
