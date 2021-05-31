import cx from 'clsx';
import { useMemo } from 'react';
import { BeautifyTheme, DefaultStyleProps, useBeautifyTheme } from '@library/theme';

const spacings = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

export interface InputWrapperProps extends DefaultStyleProps {
  theme: BeautifyTheme;
}

export const getStyles = (props: InputWrapperProps) => {
  const { theme } = props;

  const css: any = {
    inputwrapper: {
      lineHeight: theme.lineHeights.normal,
    },
    label: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    },
    error: {
      marginTop: spacings.sm / 2,
    },
    description: {
      marginTop: spacings.xs / 2,
      marginBottom: spacings.xs / 2,
    },
    required: {
      color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
    },
  };

  const classes = {
    inputwrapper: cx(),
    label: cx(`block mb-3 text-md font-medium break-words`),
    error: cx(`break-words`),
    description: cx(`break-words`),
    required: cx(),
  };
  return { classes, css };
};

export const useStyles = (props: InputWrapperProps) => {
  const { themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, theme]
  );
};
