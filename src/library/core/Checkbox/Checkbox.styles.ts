import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyTheme,
  DefaultStyleProps,
  useBeautifyTheme,
  BeautifySize,
  getTextSizeValue,
  getThemeColor,
} from '@library/theme';

export const sizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 26,
  xl: 36,
};

interface CheckboxStylesProps extends DefaultStyleProps {
  theme: BeautifyTheme;
  size: BeautifySize;
  color: string;
}

interface StylesProps extends CheckboxStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, size, color } = props;

  const css: any = {
    checkbox: {
      appearance: 'none',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      width: getTextSizeValue({ size, sizes }),
      height: getTextSizeValue({ size, sizes }),
      borderRadius: theme.radius.md,
      padding: 0,
      outline: 0,
      display: 'block',
      margin: 0,

      '&:checked': {
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 4 : 6,
        }),
        borderColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
        color: theme.white,

        '& + $icon': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
          display: 'block',
        },
      },

      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
        cursor: 'not-allowed',

        '& + $icon': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        },
      },
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    checkboxWrapper: {
      position: 'relative',
      width: getTextSizeValue({ size, sizes }),
      height: getTextSizeValue({ size, sizes }),
    },
    label: {
      WebkitTapHighlightColor: 'transparent',
      paddingLeft: 8,
      fontSize: getTextSizeValue({ size, sizes: theme.fontSizes }),
      lineHeight: `${getTextSizeValue({ size, sizes })}px`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    },
    icon: {
      pointerEvents: 'none',
      width: '80%',
      height: '80%',
      position: 'absolute',
      zIndex: 1,
      top: 0,
      margin: 'auto',
    },
  };

  const classes = {
    checkbox: cx(),
    wrapper: cx(),
    checkboxWrapper: cx(),
    label: cx(),
    icon: cx(),
  };
  return { classes, css };
};

export const useStyles = (props: CheckboxStylesProps) => {
  const { themeOverride, size, color } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, size, color }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, size, color, theme]
  );
};
