import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyCase,
  BeautifyTheme,
  DefaultStyleProps,
  getTextSizeValue,
  getTransformValue,
  useBeautifyTheme,
} from '@library/theme';

interface InputsWrapperStylesProps extends DefaultStyleProps {
  size: string;
  transform: BeautifyCase;
}
interface StylesProps extends InputsWrapperStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, transform, size } = props;

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
      `block text-sm font-extrabold`,
      getTransformValue({ transform }),
      getTextSizeValue({ size })
    ),
    error: 'mt-2 text-sm text-gray-500',
  };
  return { classes, css };
};

export const useStyles = (props: InputsWrapperStylesProps) => {
  const { themeOverride, transform, size } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, transform, size }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, transform, size]
  );
};
