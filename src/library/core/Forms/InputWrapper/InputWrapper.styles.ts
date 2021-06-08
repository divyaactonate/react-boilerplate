import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyCase,
  BeautifyTheme,
  BeautifyWeight,
  DefaultStyleProps,
  getTextSizeValue,
  getTransformValue,
  getWeightValue,
  useBeautifyTheme,
} from '@library/theme';

const spacings = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};
export interface InputWrapperProps extends DefaultStyleProps {
  size: string;
  transform: BeautifyCase;
  weight: BeautifyWeight;
}
export interface StyleProps extends InputWrapperProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StyleProps) => {
  const { theme, transform, size, weight } = props;

  const css: any = {
    inputwrapper: {},
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
    inputwrapper: cx(theme.lineHeights.normal),
    label: cx(
      `block mb-3 text-md font-medium break-words`,
      getTransformValue({ transform }),
      getTextSizeValue({ size }),
      getWeightValue({ weight })
    ),
    error: cx(`break-words`),
    description: cx(`break-words`),
    required: cx(),
  };
  return { classes, css };
};

export const useStyles = (props: InputWrapperProps) => {
  const { themeOverride, transform, size, weight } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, transform, size, weight }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, transform, size, weight]
  );
};
