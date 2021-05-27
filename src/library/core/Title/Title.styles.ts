import {
  BeautifyHeading,
  BeautifyTheme,
  DefaultStyleProps,
  getHeadingValue,
  getThemeColor,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface TitleStylesProps extends DefaultStyleProps {
  order: BeautifyHeading;
  color: string;
}
interface StylesProps extends TitleStylesProps {
  theme: BeautifyTheme;
}
export const getStyles = (props: StylesProps) => {
  const { order, color, theme } = props;
  const css = {
    title: {
      color:
        color === 'white' || theme.colorScheme === 'dark'
          ? theme.white
          : color === 'black'
          ? theme.black
          : getThemeColor({ theme, color, shade: 8 }),
    },
  };
  const classes = {
    title: cx(`m-0`, getHeadingValue({ heading: order })),
  };
  return { classes, css };
};
export const useStyles = (props: TitleStylesProps) => {
  const { order, color, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ order, color, theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [order, color, themeOverride]
  );
};
