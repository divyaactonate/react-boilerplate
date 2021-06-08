import {
  BeautifyPadding,
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getPaddingValue,
  getTextSizeValue,
  getThemeColor,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface ContainerStylesProps extends DefaultStyleProps {
  fluid: boolean;
  color: string;
  size: BeautifySize;
  padding: BeautifyPadding;
}
interface StylesProps extends ContainerStylesProps {
  theme: BeautifyTheme;
}
export const sizes = {
  xs: 'w-2/12',
  sm: 'w-4/12',
  md: 'w-6/12',
  lg: 'w-8/12',
  xl: 'w-10/12',
};

export const getStyles = (props: StylesProps) => {
  const { fluid, size, padding, color, theme } = props;

  const css = {
    container: {
      color: color === 'white' ? theme.black : theme.white,
      backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 }),
    },
  };

  const classes = {
    container: cx(
      `m-auto`,
      fluid ? 'w-full' : getTextSizeValue({ size, sizes }),
      getPaddingValue({ padding })
    ),
  };
  return { classes, css };
};
export const useStyles = (props: ContainerStylesProps) => {
  const { fluid, size, padding, color, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);
  return useMemo(
    () => getStyles({ fluid, size, color, padding, theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fluid, size, themeOverride, padding, color]
  );
};
