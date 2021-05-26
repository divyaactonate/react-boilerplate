import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyTheme,
  DefaultStyleProps,
  useBeautifyTheme,
  BeautifySize,
  getThemeColor,
  getSizeValue,
  hexToRgba,
} from '@library/theme';

interface BadgeStylesProps extends DefaultStyleProps {
  color: string;
  size: BeautifySize;
  radius: BeautifySize;
  fullWidth: boolean;
}
interface StylesProps extends BadgeStylesProps {
  theme: BeautifyTheme;
}
const spacing = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

const sizes = {
  xs: {
    fontSize: 9,
    height: 16,
  },
  sm: {
    fontSize: 10,
    height: 18,
  },
  md: {
    fontSize: 11,
    height: 20,
  },
  lg: {
    fontSize: 13,
    height: 26,
  },
  xl: {
    fontSize: 16,
    height: 32,
  },
} as const;

export const heights = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = sizes[key].height;
  return acc;
}, {} as Record<BeautifySize, number>);

export const getStyles = (props: StylesProps) => {
  const { theme, color, size, radius, fullWidth } = props;
  const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;

  const css: any = {
    badge: {
      fontSize,
      height,
      WebkitTapHighlightColor: 'transparent',
      lineHeight: `${height - 2}px`,
      border: '1px solid transparent',
      padding: [0, getSizeValue({ size, sizes: spacing }) / 1.5],
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      letterSpacing: 0.25,
    },
    leftSection: {
      marginRight: spacing.md / 2,
    },
    rightSection: {
      marginLeft: spacing.md / 2,
    },
    inner: {},
    light: {
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
        theme.colorScheme === 'dark' ? 0.3 : 1
      ),
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
    },
    filled: {
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: 7 }),
        theme.colorScheme === 'dark' ? 0.65 : 1
      ),
      color: theme.white,
      textShadow:
        theme.colorScheme === 'dark'
          ? 'none'
          : `1px 1px 0 ${getThemeColor({ theme, color, shade: 9 })}`,
    },
    outline: {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 8 }),
      borderColor: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 8 }),
        0.55
      ),
    },
  };

  const classes = {
    badge: cx(
      `no-underline box-border justify-center items-center uppercases font-bold cursor-default overflow-ellipsis overflow-hidden`,
      getSizeValue({ size: radius, sizes: theme.radius })
    ),
    leftSection: cx(),
    rightSection: cx(),
    inner: cx(`whitespace-nowrap overflow-hidden overflow-ellipsis`),
    light: cx(),
    filled: cx(),
    outline: cx(`bg-transparent`),
  };
  return { classes, css };
};

export const useStyles = (props: BadgeStylesProps) => {
  const { themeOverride, color, size, radius, fullWidth } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, color, size, radius, fullWidth }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, color, size, radius, fullWidth, theme]
  );
};
