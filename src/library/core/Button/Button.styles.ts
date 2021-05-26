import {
  BeautifyCase,
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getRadiusValue,
  getSizeValue,
  getStyleValue,
  getThemeColor,
  hexToRgba,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface ButtonStylesProps extends DefaultStyleProps {
  color?: string;
  size: BeautifySize;
  radius: BeautifySize;
  disabled: boolean;
  loadingText: boolean;
  isLoading: boolean;
  transform: BeautifyCase;
  fullWidth: boolean;
}
interface StylesProps extends ButtonStylesProps {
  theme: BeautifyTheme;
}
const paddings = {
  xs: 'px-4',
  sm: 'px-4',
  md: 'px-4',
  lg: 'px-6',
  xl: 'px-6',
};
const heights = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14',
};
const getWidthStyles = (fullWidth: boolean) => {
  if (fullWidth) return 'block w-full';
  else return 'inline-block w-auto';
};

const getStyles = (props: StylesProps) => {
  const { color, theme, isLoading, fullWidth, radius, size, transform, loadingText } = props;

  const css = {
    link: {
      cursor: isLoading ? 'not-allowed' : 'auto',
      backgroundColor: 'transparent',
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
      '&:hover': {
        textDecoration: 'underline',
      },
      '&:disabled': {
        color: theme.colors.gray[5],
        cursor: 'not-allowed',

        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
    filled: {
      border: '1px solid transparent',
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: 7 }),
        theme.colorScheme === 'dark' ? 0.65 : 1
      ),
      textShadow:
        theme.colorScheme === 'dark'
          ? 'none'
          : `1px 1px 0 ${getThemeColor({ theme, color, shade: 8 })}`,
      color: color === 'white' ? theme.black : theme.white,

      '&:hover': {
        backgroundColor: hexToRgba(
          getThemeColor({ theme, color, shade: 8 }),
          theme.colorScheme === 'dark' ? 0.95 : 1
        ),
      },

      '&:not(:disabled):active': {
        transform: 'translateY(1px)',
      },

      '&:disabled': {
        borderColor: 'transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        textShadow: 'none',
        cursor: 'not-allowed',
      },
    },
    light: {
      backgroundColor: 'transparent',
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 8 }),
      border: `1px solid ${hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 4 }),
        theme.colorScheme === 'dark' ? 0.45 : 1
      )}`,

      '&:not(:disabled):active': {
        transform: 'translateY(1px)',
      },

      '&:disabled': {
        borderColor: 'transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        cursor: 'not-allowed',
      },
    },
    outline: {
      border: '1px solid transparent',
      backgroundColor: hexToRgba(
        getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 9 : 0 }),
        theme.colorScheme === 'dark' ? 0.3 : 1
      ),
      color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),

      '&:hover': {
        backgroundColor: hexToRgba(
          getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 1 }),
          theme.colorScheme === 'dark' ? 0.35 : 1
        ),
      },

      '&:not(:disabled):active': {
        transform: 'translateY(1px)',
      },

      '&:disabled': {
        borderColor: 'transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        textShadow: 'none',
        cursor: 'not-allowed',
      },
    },
  };

  const classes = {
    iconStyle: `flex items-center`,
    leftIcon: ``,
    rightIcon: ``,
    inner: `flex items-center space-x-2 justify-center h-full`,
    label: `block whitespace-nowrap overflow-hidden overflow-ellipsis`,
    button: cx(
      `cursor-pointer ${transform}`,
      `box-border no-underline appearance-none`,
      `transition ease-in-out duration-150`,
      `focus:outline-none`,
      getStyleValue(paddings, size),
      getStyleValue(heights, size),
      getWidthStyles(fullWidth),
      getSizeValue({ size }),
      getRadiusValue({ radius })
    ),
    spinner: cx(
      `flex items-center text-white text-md leading-normal`,
      loadingText ? 'relative m-2' : 'absolute m-0'
    ),
  };
  return { classes, css };
};
export const useStyles = (props: ButtonStylesProps) => {
  const {
    color,
    disabled,
    themeOverride,
    isLoading,
    fullWidth,
    radius,
    size,
    transform,
    loadingText,
  } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () =>
      getStyles({
        color,
        disabled,
        isLoading,
        fullWidth,
        radius,
        size,
        transform,
        loadingText,
        theme,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [color, disabled, isLoading, fullWidth, radius, size, transform, loadingText, themeOverride]
  );
};
