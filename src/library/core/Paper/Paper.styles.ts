import {
  BeautifyPadding,
  BeautifyShadow,
  BeautifySize,
  BeautifyTheme,
  DefaultStyleProps,
  getPaddingValue,
  getRadiusValue,
  getShadowValue,
  useBeautifyTheme,
} from '@library/theme';
import cx from 'clsx';
import { useMemo } from 'react';

interface PaperStylesProps extends DefaultStyleProps {
  color: string;
  padding: BeautifyPadding;
  shadow: BeautifyShadow;
  radius: BeautifySize;
}
interface StylesProps extends PaperStylesProps {
  theme: BeautifyTheme;
}
const getStyles = (props: StylesProps) => {
  const { shadow, radius, color, padding, theme } = props;

  const colorStyles = cx(
    color === 'white'
      ? `bg-${color} text-black`
      : color === 'black'
      ? `bg-${color} text-white`
      : `bg-${color}-700 text-white`
  );
  const css = {
    paper: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  };
  const classes = {
    paper: cx(
      `box-border`,
      getShadowValue({ shadow }),
      colorStyles,
      getRadiusValue({ radius }),
      getPaddingValue({ padding })
    ),
  };
  return { classes, css };
};

export const useStyles = (props: PaperStylesProps) => {
  const { shadow, radius, color, padding, themeOverride } = props;
  const theme: BeautifyTheme = useBeautifyTheme(themeOverride);

  return useMemo(
    () => getStyles({ shadow, radius, color, padding, theme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [shadow, radius, color, padding, themeOverride]
  );
};
