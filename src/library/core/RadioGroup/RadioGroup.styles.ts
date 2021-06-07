import {
  BeautifyNumberSize,
  BeautifyTheme,
  DefaultStyleProps,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';
interface RadioGroupStylesProps extends DefaultStyleProps {
  spacing: BeautifyNumberSize;
  variant: 'vertical' | 'horizontal';
}
interface StylesProps extends RadioGroupStylesProps {
  theme: BeautifyTheme;
}
const getStyles = (props: StylesProps) => {
  const { spacing, variant } = props;

  const css = {
    wrapper: {},
  };
  const classes = {
    wrapper: cx(
      `flex flex-wrap`,
      variant === 'horizontal' ? `flex-row space-x-${spacing}` : `flex-col space-y-${spacing}`
    ),
  };
  return { classes, css };
};

export const useStyles = (props: RadioGroupStylesProps) => {
  const { spacing, variant, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ spacing, variant, theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [spacing, variant]
  );
};
