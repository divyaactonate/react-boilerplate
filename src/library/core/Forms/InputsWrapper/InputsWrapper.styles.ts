import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyCase,
  BeautifyTheme,
  DefaultStyleProps,
  getTextSizeValue,
  getTransformValue,
  BeautifyWeight,
  useBeautifyTheme,
  getWeightValue,
} from '@library/theme';

interface InputsWrapperStylesProps extends DefaultStyleProps {
  size: string;
  transform: BeautifyCase;
  weight: BeautifyWeight;
}
interface StylesProps extends InputsWrapperStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, transform, size, weight } = props;

  const css = {
    inputswrapper: {},
    label: {
      color: theme.colors.gray[7],
    },
    error: {
      color: theme.colors.red[5],
    },
  };

  const classes = {
    inputswrapper: cx(),
    required: cx(),
    label: cx(
      `block`,
      getTransformValue({ transform }),
      getTextSizeValue({ size }),
      getWeightValue({ weight })
    ),
    error: 'mt-0.5 text-sm text-gray-500',
  };
  return { classes, css };
};

export const useStyles = (props: InputsWrapperStylesProps) => {
  const { themeOverride, transform, size, weight } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, transform, size, weight }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, transform, size, weight]
  );
};
