import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyTheme,
  DefaultStyleProps,
  BeautifySize,
  getSizeValue,
  useBeautifyTheme,
} from '@library/theme';

interface InputStylesProps extends DefaultStyleProps {
  radius: BeautifySize;
  theme: BeautifyTheme;
}

interface StylesProps extends InputStylesProps {
  theme: BeautifyTheme;
}

export const getStyles = (props: StylesProps) => {
  const { theme, radius } = props;

  const css: any = {
    input: {
      WebkitTapHighlightColor: 'transparent',
      lineHeight: theme.lineHeights,
      appearance: 'none',
      resize: 'none',
      boxSizing: 'border-box',
      fontSize: theme.fontSizes.sm,
      width: '100%',
      color: theme.black,
      display: 'block',
      textAlign: 'left',

      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&::placeholder': {
        opacity: 1,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
      },

      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
        {
          appearance: 'none',
        },

      '&[type=number]': {
        MozAppearance: 'textfield',
      },
    },
    withIcon: {},
    inputWrapper: {
      position: 'relative',
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),

      '&, & *': { boxSizing: 'border-box' },
    },
    defaultVariant: {
      '& $input': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        minHeight: 36,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
        }`,
        transition: 'border-color 100ms ease, box-shadow 100ms ease',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:focus': {
          outline: 'none',
          borderColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 6],
        },
      },

      '&$invalid $input': {
        borderColor: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
      },

      '& $withIcon': {
        paddingLeft: 35,
      },

      '& $icon': {
        width: 36,
      },
    },
    filledVariant: {
      '& $input': {
        minHeight: 36,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        border: '1px solid transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:focus': {
          outline: 'none',
          borderColor: `${
            theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 6]
          } !important`,
        },

        '&::placeholder': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        },
      },

      '& $input:disabled': {
        '&::placeholder': {
          color: theme.colors.gray[5],
        },
      },

      '&$invalid $input': {
        borderColor: theme.colorScheme === 'dark' ? theme.colors.red[4] : 'transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.red[0],
      },

      '& $withIcon': {
        paddingLeft: 35,
      },

      '& $icon': {
        width: 36,
        color: theme.colors.gray[6],
      },
    },
    unstyledVariant: {
      '& $input': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor: 'transparent',
        height: 28,
        border: 0,
        outline: 0,

        '&:disabled': {
          backgroundColor: 'transparent',
        },
      },

      '& $icon': {
        width: 28,
      },

      '& $withIcon': {
        paddingLeft: 34,
      },
    },
    icon: {
      pointerEvents: 'none',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    invalid: {
      '& $input': {
        color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
        borderColor: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],

        '&::placeholder': {
          color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
        },
      },

      '& $icon': {
        color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
      },
    },
    rightSection: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const classes = {
    input: cx(`appearance-none resize-none border-box block text-left text-sm bg-red`),
    withIcon: cx(),
    inputWrapper: cx(`relative`),
    defaultVariant: cx(),
    filledVariant: cx(),
    unstyledVariant: cx(),
    icon: cx(`pointer-events-none absolute left-0 top-0 bottom-0 flex justify-center items-center`),
    invalid: cx(``),
    rightSection: cx(`absolute top-0 bottom-0 right-0 flex justify-center items-center`),
  };
  return { classes, css };
};

export const useStyles = (props: InputStylesProps) => {
  const { themeOverride, radius } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, radius }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, radius, theme]
  );
};
