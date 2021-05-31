import cx from 'clsx';
import { useMemo } from 'react';
import {
  BeautifyTheme,
  DefaultStyleProps,
  BeautifySize,
  getsizeValue as getSizeValue,
  useBeautifyTheme,
} from '@library/theme';

interface RadioGroupStylesProps extends DefaultStyleProps {
  spacing: BeautifySize;
  variant: 'vertical' | 'horizontal';
}
interface StylesProps extends RadioGroupStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme, spacing, variant } = props;

  const css: any = {
    wrapper: {
      flexDirection: variant === 'vertical' ? 'column' : 'row',
      margin: (getSizeValue({ size: spacing }) / 2) * -1,
      marginTop:
        (getSizeValue({ sizes: theme.spacing, size: spacing }) / 4) *
        (variant === 'vertical' ? 1 : -1),

      '& [data-mantine-radio]': {
        margin: getSizeValue({ sizes: theme.spacing, size: spacing }) / 2,
        marginTop:
          variant === 'vertical' && getSizeValue({ sizes: theme.spacing, size: spacing }) / 4,
        marginBottom:
          variant === 'vertical' && getSizeValue({ sizes: theme.spacing, size: spacing }) / 4,
      },
    },
  };

  const classes = {
    wrapper: cx(`flex flex-wrap`),
  };
  return { classes, css };
};

export const useStyles = (props: RadioGroupStylesProps) => {
  const { themeOverride, spacing, variant } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, spacing, variant }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, spacing, variant, theme]
  );
};
