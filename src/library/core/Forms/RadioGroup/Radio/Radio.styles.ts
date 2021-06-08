import {
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getTextSizeValue,
  getThemeColor,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';
interface RadioStylesProps extends DefaultStyleProps {
  size: BeautifySize;
  color: string;
  disabled: boolean;
}
interface StylesProps extends RadioStylesProps {
  theme: BeautifyTheme;
}
export const sizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 26,
  xl: 36,
};
const getStyles = (props: StylesProps) => {
  const { size, theme, color, disabled } = props;
  const css: any = {
    wrapper: {
      WebkitTapHighlightColor: 'transparent',
    },
    label: {
      color: disabled
        ? theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[5]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.black,
    },
    radio: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      position: 'relative',
      appearance: 'none',
      width: getTextSizeValue({ sizes, size }),
      height: getTextSizeValue({ sizes, size }),
      borderRadius: getTextSizeValue({ sizes, size }),
      margin: 0,
      marginRight: 2,
      // background: 'red',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:checked': {
        background: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
        borderColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),

        '&::before': {
          content: '""',
          display: 'block',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          width: getTextSizeValue({ sizes, size }) / 2,
          height: getTextSizeValue({ sizes, size }) / 2,
          borderRadius: getTextSizeValue({ sizes, size }) / 2,
        },
      },
      '&:disabled': {
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

        '&::before': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4],
        },
      },
    },
  };
  const classes = {
    wrapper: `flex items-center`,
    label: cx(`flex items-center space-x-1.5`),
    radio: cx(),
  };
  return { classes, css };
};

export const useStyles = (props: RadioStylesProps) => {
  const { size, color, themeOverride, disabled } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ size, theme, color, disabled }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size, color, themeOverride, disabled]
  );
};
