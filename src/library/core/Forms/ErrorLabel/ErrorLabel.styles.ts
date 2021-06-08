import { BeautifyTheme, DefaultStyleProps, useBeautifyTheme } from '@library/theme';
import { useMemo } from 'react';

type ErrorLabelStylesProps = DefaultStyleProps;
interface StylesProps extends ErrorLabelStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { theme } = props;

  const css = {
    errorlabel: {
      color: theme.colors.red[5],
      fontSize: '0.65rem',
    },
  };

  const classes = {
    errorlabel: 'mt-0.5 text-gray-500',
  };
  return { classes, css };
};

export const useStyles = (props: ErrorLabelStylesProps) => {
  const { themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride]
  );
};
