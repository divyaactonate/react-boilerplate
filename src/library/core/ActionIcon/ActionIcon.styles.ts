import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyTheme,
  DefaultStyleProps,
  useBeautifyTheme,
  hexToRgba,
  getThemeColor,
  getTextSizeValue,
  BeautifySize,
  getRadiusValue,
} from '@library/theme';

interface ActionIconStylesProps extends DefaultStyleProps {
  color: string;
  size: BeautifySize;
  radius: BeautifySize;
  theme: BeautifyTheme;
}

interface StylesProps extends ActionIconStylesProps {
  theme: BeautifyTheme;
}

export const sizes = {
  xs: 28,
  sm: 34,
  md: 44,
  lg: 56,
  xl: 68,
};

export const getStyles = (props: StylesProps) => {
  const { theme, color, size, radius } = props;
  const css: any = {
    actionicon: {
      WebkitAppearance: 'none',
      WebkitTapHighlightColor: 'transparent',
      border: '1px solid transparent',
      height: getTextSizeValue({ size, sizes }),
      minHeight: getTextSizeValue({ size, sizes }),
      width: getTextSizeValue({ size, sizes }),
      minWidth: getTextSizeValue({ size, sizes }),
      borderRadius: getRadiusValue({ radius }),
      transition: 'color 100ms ease, background-color 100ms ease',

      '&:not(:disabled):active': {
        transform: 'translateY(1px)',
      },

      '&:disabled': {
        color: theme.colors.gray[theme.colorScheme === 'dark' ? 6 : 4],
        cursor: 'not-allowed',
      },
    },
    filled: {
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: 7 }),
        theme.colorScheme === 'dark' ? 0.65 : 1
      ),
      color: theme.white,

      '&:not(:disabled):hover': {
        backgroundColor: hexToRgba(
          getThemeColor({ theme, color, shade: 8 }),
          theme.colorScheme === 'dark' ? 0.95 : 1
        ),
      },

      '&:disabled': {
        backgroundColor: getThemeColor({
          theme,
          color: 'gray',
          shade: theme.colorScheme === 'dark' ? 8 : 1,
        }),
      },
    },
    light: {
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
        theme.colorScheme === 'dark' ? 0.3 : 1
      ),
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),

      '&:not(:disabled):hover': {
        backgroundColor: hexToRgba(
          getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 1 }),
          theme.colorScheme === 'dark' ? 0.65 : 1
        ),
      },

      '&:disabled': {
        backgroundColor: getThemeColor({
          theme,
          color: 'gray',
          shade: theme.colorScheme === 'dark' ? 8 : 1,
        }),
      },
    },
    hover: {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 5 : 7 }),
      backgroundColor: 'transparent',

      '&:not(:disabled):hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : getThemeColor({ theme, color, shade: 0 }),
      },
    },
    transparent: {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 5 : 7 }),
      backgroundColor: 'transparent',
    },
    outline: {
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 8 }),
      backgroundColor: 'transparent',
      border: `1px solid ${hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 4 }),
        theme.colorScheme === 'dark' ? 0.45 : 1
      )}`,

      '&:not(:disabled):hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : getThemeColor({ theme, color, shade: 0 }),
      },

      '&:disabled': {
        borderColor: theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 3],
      },
    },
  };

  const classes = {
    actionicon: cx(
      `appearance-none flex justify-center items-center cursor-pointer box-border p-0 leading-none`,
      getRadiusValue({ radius }),
      getTextSizeValue({ size, sizes })
    ),
  };
  return { classes, css };
};

export const useStyles = (props: ActionIconStylesProps) => {
  const { themeOverride, color, size, radius } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, color, size, radius }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, color, size, radius, theme]
  );
};
