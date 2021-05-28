import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyTheme,
  DefaultStyleProps,
  useBeautifyTheme,
  getsizeValue as getSizeValue,
  getThemeColor,
  BeautifySize,
} from '@library/theme';

interface RadioStylesProps extends DefaultStyleProps {
  size: BeautifySize;
  color: string;
}

interface StylesProps extends RadioStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, size, color } = props;

  const css: any = {
    labelDisabled: {},
    wrapper: { WebkitTapHighlightColor: 'transparent' },
    radio: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      position: 'relative',
      appearance: 'none',
      width: getSizeValue({ size }),
      height: getSizeValue({ size }),
      borderRadius: getSizeValue({ size }),
      margin: 0,
      marginRight: theme.paddings.sm,
      background: 'red',
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
          width: getSizeValue({ size }) / 2,
          height: getSizeValue({ size }) / 2,
          borderRadius: getSizeValue({ size }) / 2,
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
    label: {
      fontSize: theme.fontSizes[size] || theme.fontSizes.md,
      lineHeight: `${getSizeValue({ size })}px`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&$labelDisabled': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
    },
  };

  const classes = {
    labelDisabled: cx(``),
    wrapper: cx(`flex items-center`),
    radio: cx(``),
    label: cx(`flex items-center`),
  };
  return { classes, css };
};

export const useStyles = (props: RadioStylesProps) => {
  const { themeOverride, size, color } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, size, color }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, theme, size, color]
  );
};
