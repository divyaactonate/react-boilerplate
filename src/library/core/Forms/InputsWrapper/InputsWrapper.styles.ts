import {
  BeautifyCase,
  BeautifyTheme,
  BeautifyWeight,
  DefaultStyleProps,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface InputsWrapperStylesProps extends DefaultStyleProps {
  size: string;
  transform: BeautifyCase;
  weight: BeautifyWeight;
  minHeight: any;
}
interface StylesProps extends InputsWrapperStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { minHeight } = props;

  const css = {
    inputswrapper: {
      minHeight,
    },
  };

  const classes = {
    inputswrapper: cx(``),
  };
  return { classes, css };
};

export const useStyles = (props: InputsWrapperStylesProps) => {
  const { themeOverride, transform, minHeight, size, weight } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ theme, transform, minHeight, size, weight }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeOverride, transform, size, weight, minHeight]
  );
};
